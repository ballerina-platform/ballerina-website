---
layout: ballerina-cloud-left-nav-pages-swanlake
title: Virtual machine deployment guide
description: If you prefer to execute Ballerina services directly on virtual machines (VMs) or bare metal servers without using containerization, you can follow these steps to set up and run your services in a production environment, 
keywords: ballerina, programming language, services, cloud, kubernetes, docker
active: ballerina-deployment-guideLines
intro: If you prefer to execute Ballerina services directly on virtual machines (VMs) or bare metal servers without using containerization, you can follow these steps to set up and run your services in a production environment, 
---

1. Prepare the Server Environment

    - Provision the VM or Bare Metal Server,
      - Ensure the server meets the hardware requirements for your application (CPU, memory, disk space, etc.).
      - Configure the server OS (Linux is recommended for production).

2. Install the Ballerina distribution from the Ballerina Installation options.

3. Install any other dependencies your Ballerina service might need (e.g., database drivers, libraries).

4. Set up the application code
    
    - Write Ballerina code
      **service.bal**
      ```ballerina
         import ballerina/http;
            
         // Define the HTTP service.
         service / on new http:Listener(9090) {
             resource function get sayHello() returns string {
                 return "Hello World!";
             }
         }
      ```
    - Organize the Project: Follow the standard Ballerina Project structure, with a `Ballerina.toml` file and 
      source organized in modules if needed. You can visit the [Organize Ballerina code](https://ballerina.io/learn/organize-ballerina-code/) for 
      detailed information about packages and how you can manage the growth of your source code.
   
5. Build the Ballerina Service
    
    - Compile the service, This command creates an executable `.jar` file in the target/bin
      ```yaml
      $ bal build
      ```
   > **Tip**: You can use GraalVM builds to compile Ballerina apps into native binaries, 
         ensuring faster startup and lower memory usage compared to the JVM.
         ```
         $ bal build --graalvm
         ```
         See [Build the GraalVM executable](https://ballerina.io/learn/build-the-executable-locally/) locally for more information.

## CI/CD integration with VMs

The [Ballerina Github](https://github.com/ballerina-platform/ballerina-action) action can automate the continuous integration 
and continuous deployment (CI/CD) process for a Ballerina project. Refer to the following sample workflow file. It is triggered on every push to the repository, and on each trigger, builds the project.
```yaml
name: Ballerina example

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
	 # Step 1: Checkout the Repository
      - name: Checkout
        uses: actions/checkout@v1

	# Step 2: Build the Ballerina package
      - name: Ballerina Build
        uses: ballerina-platform/ballerina-action@master
        with:
          args: 
            pack

      #- name: Ballerina Build with GraalVm
      #  uses: ballerina-platform/ballerina-action@master
      #  with:
      #    args: 
      #      build --graalvm
```
VM/Bare Metal Implementation:
- **Step 01:** The push event can initiate a build and deployment process to the Kubernetes cluster.
- **Step 02:** This step builds the Ballerina project, compiling the source code and preparing the necessary artifacts.