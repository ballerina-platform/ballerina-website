---
layout: ballerina-cloud-left-nav-pages-swanlake
title: Kubernetes deployment
description: When deploying Ballerina services in a Kubernetes environment, it is essential to focus on high availability and scalability. Key considerations include determining the appropriate number of worker nodes and replicas. These decisions help scale the deployment and ensure that the system remains available and responsive under load. 
keywords: ballerina, programming language, services, cloud, kubernetes, docker
active: ballerina-deployment-guideLines
intro: When deploying Ballerina services in a Kubernetes environment, it is essential to focus on high availability and scalability. Key considerations include determining the appropriate number of worker nodes and replicas. These decisions help scale the deployment and ensure that the system remains available and responsive under load. 
---

## Simple application deployment in Kubernetes

Ballerina simplifies Kubernetes artifact generation by deriving configurations directly from your code, enabling developers to focus on business logic. Below is a guide for deploying Ballerina applications on Kubernetes using Ballerina’s Code-to-Cloud capabilities.

### Ballerina application code

Here is an example of a Ballerina service that serves a simple `Hello from Kubernetes!` message on an HTTP request.
```ballerina
import ballerina/http;

// HTTP Listener on port 9090
listener http:Listener helloEP = new (9090);


service /helloWorld on helloEP {
    resource function get greeting() returns string {
        return "Hello from Kubernetes!";
    }
}
```
This code is deployment-agnostic and only handles the business logic. Ballerina automatically builds and generates the Kubernetes deployment artifacts.

> **Note:** If you are using a Ballerina cache in a Kubernetes environment, note that the cache is local to each pod. 
> Consider using a Redis server to manage the cache if your application requires a distributed caching solution.

### Overriding default Kubernetes configurations

Create a `Cloud.toml` file in the project directory to customize the deployment parameters. This file will allow you to override the compiler's default values.

**Sample Cloud.toml**

```toml
[container.image]
repository="wso2inc"  # Docker hub repository name. Default Value: ""
name="hello" # container name. Default Value: $USER-$MODULE_NAME
tag="v0.1.0" # Tag of the container. Default Value: "latest"
```
See [Ballerina Code to Cloud Specification](https://github.com/ballerina-platform/ballerina-spec/blob/master/c2c/code-to-cloud-spec.md#containerimage) for more information.


### Building the Kubernetes artifacts

Use the `bal build` command to build the Ballerina package. This will generate Kubernetes YAML files and Docker container artifacts.

>**Note:** For macOS users with Apple Silicon chips, it is necessary to set the environment variable DOCKER_DEFAULT_PLATFORM to linux/amd64 before building the image. This requirement exists because the Ballerina Docker image does not currently support Apple Silicon chips.
> ```
> export DOCKER_DEFAULT_PLATFORM=linux/amd64
> ```

```
$ bal build --cloud="k8s"

Compiling source
        wso2/hello:0.1.0

Generating executable

Generating artifacts...

        @kubernetes:Service                      - complete 1/1
        @kubernetes:Deployment                   - complete 1/1
        @kubernetes:HPA                          - complete 1/1
        @kubernetes:Docker                       - complete 2/2 

        Execute the below command to deploy the Kubernetes artifacts: 
        kubectl apply -f /home/user/k8s/target/kubernetes/hello

        Execute the below command to access service via NodePort: 
        kubectl expose deployment hello-deployment --type=NodePort --name=hello-svc-local
```

Once the build is complete, Ballerina generates the Kubernetes artifacts, including the Service, Deployment, HorizontalPodAutoscaler, and Docker image configuration.
The artifacts are located in `target/kubernetes/hello`.

### Deploying the application to Kubernetes

Push the Docker image to Docker Hub.
```
$ docker push wso2inc/hello:v0.1.0
```

Deploy the generated Kubernetes artifacts.
```
$ kubectl apply -f /path/to/target/kubernetes/hello
```

Expose the service via NodePort for local testing.

```
$ kubectl expose deployment hello-deployment --type=NodePort --name=hello-svc-local
service/hello-svc-local exposed
```

Get the Kubernetes service details.
```
$ kubectl get svc

NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
hello-svc               ClusterIP       10.97.140.84        <none>        9090/TCP         13m
hello-svc-local         NodePort        10.108.87.21        <none>        9090:31360/TCP   2m18s
```
Access the service using the external IP and NodePort

For Minikube users, you can obtain the IP using.
```yaml
$ minikube ip
```
> **Tip:** you can access your service locally via `kubectl port-forward`
 `$ kubectl port-forward svc/hello-k8s-svc  8081:8080`

Test the service using curl

```
$ curl http://<EXTERNAL-IP>:<NODE-PORT>/helloWorld/greeting
```

## Kubernetes deployment with config maps and autoscaling

For a more complex deployment, this demonstrates a Ballerina app that reads a greeting from a config map and responds to HTTP requests. It covers Kubernetes deployment with resource limits, autoscaling, config maps, and health probes using Code to Cloud. 

1. Create a new Ballerina package.

```bash
$ bal new hello_k8s
```
2. Replace the `main.bal` file with the following content.

```ballerina
import ballerina/http;

listener http:Listener helloEP = new(9090);

configurable string greeting = ?;

service /helloWorld on helloEP {
    resource function get greeting() returns string {
        return greeting + ", Kubernetes!";
    }
}
```

3. Create `probes.bal` with health and readiness probes.

```ballerina
import ballerina/http;

listener http:Listener probeEP = new(9091);

service /probes on probeEP {
    resource function get healthz() returns boolean {
        return true;
    }
    resource function get readyz() returns boolean {
        return true;
    }
}
```
4. Create a `Config.toml` file.

```toml
greeting = "Hello"
```

5. Update the `Cloud.toml` to include auto-scaling, resource limits, config maps, and probe configuration.

```toml
[container.image]
repository="wso2inc"
name="hello-k8s"
tag="v0.1.0"

[cloud.deployment]
min_memory="100Mi"
max_memory="256Mi"
min_cpu="500m"
max_cpu="500m"

[cloud.deployment.autoscaling]
min_replicas=2
max_replicas=5
cpu=60

[[cloud.config.files]]
file="./Config.toml"

[cloud.deployment.probes.liveness]
port=9091
path="/probes/healthz"

[cloud.deployment.probes.readiness]
port=9091
path="/probes/readyz"
```
6. Build the package. 
```
$ bal build --cloud="k8s"
  Compiling source
       wso2/hello_k8s:0.1.0

  Generating executable

  Generating artifacts...

       @kubernetes:Service                      - complete 1/2
       @kubernetes:Service                      - complete 2/2
       @kubernetes:ConfigMap                    - complete 1/1
       @kubernetes:Deployment                   - complete 1/1
       @kubernetes:HPA                          - complete 1/1
       @kubernetes:Docker                       - complete 2/2 

       Execute the below command to deploy the Kubernetes artifacts: 
       kubectl apply -f /home/wso2/user/hello_k8s/target/kubernetes/hello_k8s

       Execute the below command to access service via NodePort: 
       kubectl expose deployment hello-k8s-deployment --type=NodePort --name=hello-k8s-svc-local

       target/bin/hello_k8s.jar
   ```
> **Tip:** You can modify the Ballerina.toml file to include a build option, allowing the integration of the `bal build` command with specific configurations.
> ```
> [build-options] 
>  cloud = "k8s"
> ```

> **Tip:** You can build the GraalVM executable in Kubernetes.
> 
>  GraalVM enhances Kubernetes deployments of Ballerina applications by enabling faster startup times and reduced memory usage. These advantages make it ideal for microservices workloads that demand rapid scaling and minimal resource consumption in a containerized environment. GraalVM’s native image feature uses ahead-of-time compilation, producing lightweight containers and improving Kubernetes deployment efficiency. The GraalVM build is best suited for deployments that prioritize fast scaling and reduced resource usage, while the standard JVM build is more appropriate for services that do not require such optimizations.
>  Execute the command below to build a Ballerina package.
> ```
> $ bal build --graalvm --cloud=k8s
> ```
> See [Build the GraalVM executable in a container](https://ballerina.io/learn/build-the-executable-in-a-container/) for more information.

7. Push Docker image to Docker Hub.
```
 $ docker push wso2inc/hello-k8s:v0.1.0
```

8. Deploy the Kubernetes artifacts. 
```
 $ kubectl apply -f target/kubernetes/hello_k8s
```
9. Testing the Kubernetes Deployment.
   Verifying the Kubernetes deployment ensures that the application is running correctly and meets the expected functionality within the Kubernetes environment.
  - Verify the pods
    ```
    $ kubectl get pods
    ```
  - Expose the service via NodePort
    ```
    $ kubectl expose deployment hello-k8s-deployment --type=NodePort --name=hello-k8s-svc-local exposed
    ```
  - Get the External IP and port
    ```
    $ kubectl get svc
    NAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
    hello-k8s-svc         ClusterIP   10.96.173.207   <none>        9090/TCP,9091/TCP               5m11s
    hello-k8s-svc-local   NodePort    10.99.245.41    <none>        9090:30342/TCP,9091:30515/TCP   66s
    kubernetes            ClusterIP   10.96.0.1       <none>        443/TCP                         130m
    ```
  - Execute the curl http://192.168.49.2:30342/helloWorld/greeting command to access the deployed service via cURL.
    ```
     $ curl http://192.168.49.2:30342/helloWorld/greeting
     Hello, Kubernetes!
    ```
    Follow the references below for more information:
    - [Deploy Ballerina on Kubernetes](https://ballerina.io/learn/deploy-ballerina-on-kubernetes/)
    - [Kubernetes - Hello world](https://ballerina.io/learn/by-example/kubernetes-hello-world/)

## Ballerina deployment with Kubernetes Kustomize

[Kustomize](https://kustomize.io/) is a tool that allows you to modify Kubernetes YAML files without altering the original files. It can enhance the generated YAML from code-to-cloud deployments by applying additional customizations. The `kustomization.yaml` file in the root directory demonstrates how to combine and manage the generated YAML files from multiple projects. Using Kustomize patches, you can add environment variables, such as specifying the location of the `Config.toml` file for a service, to enable additional configuration.

**kustomization.yaml**
```yaml
resources:
  - /path/to/target/kubernetes/hotel/hotel.ymal
  - /path/to/target/kubernetes/room/room.yaml
  - …

patchesStrategicMerge:
- secret-env-patch.yaml

```

## CI/CD with Kubernetes

This [Ballerina GitHub](https://github.com/ballerina-platform/ballerina-action) action workflow automates the continuous integration and continuous deployment (CI/CD) process for a Ballerina project. It is triggered by every push to the repository and automatically builds the project.

```yaml

name: Ballerina CI/CD with Kubernetes and Ballerina Central Push

# Step 1: Checkout the Repository
on: [push]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      # Step 2: Build the Ballerina Project
      - name: Ballerina Build
        uses: ballerina-platform/ballerina-action@master
        with:
          args: build --cloud=k8s

      # Step 3: Log in to Docker Registry
      - name: Log in to Docker Registry
        uses: docker/login-action@v2
        with:
          registry: ${{ secrets.DOCKER_REGISTRY_URL }}
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      # Step 4: Push the Docker Image
      - name: Push Docker Image
        run: |
          docker push ${{ secrets.DOCKER_REGISTRY_URL }}/your-docker-repo/your-app:${{ github.sha }}

      # Step 5: Set up Kubectl
      - name: Set up Kubectl
        uses: azure/setup-kubectl@v3
        with:
          version: 'v1.22.0'

      # Step 6: Deploy to Kubernetes
      - name: Deploy to Kubernetes
        env:
          KUBE_CONFIG_DATA: ${{ secrets.KUBE_CONFIG_DATA }}
        run: |
          echo "${KUBE_CONFIG_DATA}" | base64 --decode > $HOME/.kube/config
          kubectl apply -f <path to generated artifacts>
```
The push event can initiate a workflow to the deployment process to the Kubernetes cluster.
- **Step 02:** This step builds the Ballerina project, compiling the source code and preparing the necessary artifacts for deployment in Kubernetes.
- **Step 03:** This step logs into a Docker registry (such as Docker Hub or a private registry) to allow pushing the Docker image created in the build to the registry.
- **Step 04:** Pushes the Docker image to the specified Docker registry.
- **Step 05:** This step installs kubectl, the Kubernetes command-line tool, which is necessary for managing Kubernetes clusters and deploying applications.
- **Step 06:** Deploy the application to a Kubernetes cluster by applying the Kubernetes YAML configuration files generated by the Ballerina build in Step 2.
>**Note:** Replace <path to generated artifacts> with the actual path to the Kubernetes YAML files generated by the Ballerina build command (e.g., target/kubernetes).

See [Code to Cloud deployment](https://ballerina.io/learn/code-to-cloud-deployment/) for more information on deployment options in Kubernetes and Docker.
