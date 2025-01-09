---
layout: ballerina-cloud-left-nav-pages-swanlake
title: Serverless deployment
description: Serverless architecture allows developers to focus on writing application logic without worrying about managing servers or infrastructure. AWS Lambda automatically handles provisioning, scaling, and maintaining resources, letting you concentrate solely on your code. Following are the  Ballerina functions in a serverless environment, 
keywords: ballerina, programming language, services, cloud, kubernetes, docker
active: ballerina-deployment-guideLines
intro: Serverless architecture allows developers to focus on writing application logic without worrying about managing servers or infrastructure. AWS Lambda automatically handles provisioning, scaling, and maintaining resources, letting you concentrate solely on your code. Following are the  Ballerina functions in a serverless environment, 
---

1. [AWS Lambda](#aws-lambda)
2. [Azure Functions](#azure-functions)

## AWS Lambda

In this guide, we'll walk through deploying a serverless application using AWS Lambda with Ballerina. You'll learn how to set up, deploy, and manage your application, simplifying your production workflow and eliminating the need to manage servers.
An AWS Lambda function can be triggered by various AWS services. 

This example demonstrates how to write a simple echo function in AWS Lambda.

1. Set up the prerequisites. 
   For the instructions, see [Set up the prerequisites](https://ballerina.io/learn/aws-lambda/#set-up-the-prerequisites)
2. Here is an example of a Ballerina code for the function.
```ballerina
import ballerina/io;
import ballerinax/aws.lambda;

// The `@lambda:Function` annotation marks a function to generate an AWS Lambda function.
@lambda:Function
public function echo(lambda:Context ctx, json input) returns json {
    io:println(input.toJsonString());
    return input;
}
```

3. Use `bal build` for generating the AWS Lambda artifacts.
The AWS Lambda functionality is implemented as a compiler extension. Therefore, artifact generation happens automatically when you build a Ballerina module by executing the command below.
```
$ bal build --cloud="aws_lambda"
```

4. Execute the AWS CLI command to deploy the function, here it creates and publishes the functions by replacing the respective AWS, $LAMBDA_ROLE_ARN, $REGION_ID, and $FUNCTION_NAME values given in the command with your values.

```
$ aws lambda create-function --function-name echo --zip-file fileb://aws-ballerina-lambda-functions.zip --handler aws-lambda-hello-world.echo --runtime provided --role arn:aws:iam::908363916111:role/lambda-role--layers arn:aws:lambda:us-west-1:134633749276:layer:ballerina-jre11:6 --memory-size 512 --timeout 10
```
5. Execute the commands below to invoke the function.

```
$ echo '{"MESSAGE":"HELLO"}' > input.json
$ aws lambda invoke --function-name echo --payload fileb://input.json echo-response.txt
{
"ExecutedVersion": "$LATEST",
"StatusCode": 200
}
$ cat echo-response.txt{"MESSAGE":"HELLO"}

```
More examples can be found here,
- [AWS Lambda - Execution context](https://ballerina.io/learn/by-example/aws-lambda-execution-context/)
- [AWS Lambda - S3 trigger](https://ballerina.io/learn/by-example/aws-lambda-s3-trigger/)
- [AWS Lambda - DynamoDB trigger](https://ballerina.io/learn/by-example/aws-lambda-dynamodb-trigger/)

### CI/CD deployment with AWS Lambda

This [Ballerina GitHub](https://github.com/ballerina-platform/ballerina-action) action workflow automates the continuous integration and continuous deployment (CI/CD) process for a Ballerina project. 
It is triggered by every push to the repository and automatically builds the project.

```yaml
name: Ballerina CI/CD with AWS Lambda

on: [push]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the Repository
      - name: Checkout
        uses: actions/checkout@v2

      # Step 2: Build the Ballerina Project
      - name: Ballerina Build
        uses: ballerina-platform/ballerina-action@master
        with:
          args: build --cloud=aws_lambda

      # Step 3: Package the Function for AWS Lambda
      - name: Package for AWS Lambda
        run: |
          mkdir lambda
          cp target/bin/your_project_name.jar lambda/
          cd lambda
          zip function.zip your_project_name.jar

      # Step 4: Configure AWS Credentials
        # AWS credentials are automatically picked up from GitHub Secrets

      # Step 5: Deploy to AWS Lambda
      - name: Deploy to AWS Lambda
        uses: appleboy/lambda-action@master
        with:
          aws_access_key_id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws_region: ${{ secrets.AWS_REGION }}
          function_name: your_lambda_function_name
          handler_name: your_project_name.handler
          runtime: java11
          zip_file: lambda/function.zip
          role: ${{ secrets.AWS_LAMBDA_ROLE_ARN }}
          timeout: 30
          memory_size: 512

      # Optional: Test the Lambda Function
      - name: Invoke Lambda Function
        run: |
          aws lambda invoke --function-name your_lambda_function_name --payload '{}' response.json
          cat response.json
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
```
- **Step 01:** The push event can initiate a build and deployment process
- **Step 02:** This command tells Ballerina to compile the project specifically for AWS Lambda. It optimizes the output for Lambda’s serverless runtime requirements.
- **Step 03:** Package the compiled Ballerina application into a ZIP file suitable for AWS Lambda deployment.
- **Step 04:** Ensures that the workflow has the necessary credentials to interact with AWS services.
- **Step 05:** Deploy the packaged Ballerina function to AWS Lambda by uploading the ZIP file.
- **Step 06:** Test the deployed Lambda function by invoking it and outputting the response to confirm that the function works as expected.

## Azure Functions

In this guide, we'll walk through deploying a serverless application using Azure Functions with Ballerina. 
You'll learn how to set up, deploy, and manage your application, leveraging the power of Azure's serverless platform 
to simplify your workflows and eliminate the overhead of server management.

This example demonstrates how to write a simple echo function in Azure Functions using Ballerina, where triggers 
are represented by listeners attaching an `af:HttpListener` to a service that implies an HTTP trigger. 
The resource method behaves like a `ballerina/http` service, In the provided code sample, there's an empty service path and a resource path
named `hello` with a `get` accessor expecting a `name` query parameter, and the `ballerinax/azure_functions` package automatically handles the required artifact generation and data binding.

1. Set up the prerequisites by following [these instructions.](https://ballerina.io/learn/azure-functions/#set-up-the-prerequisites)

2. Here is an example Ballerina code.
```ballerina
import ballerinax/azure.functions;

// This function gets triggered by an HTTP call with the name query parameter and 
// returns a processed HTTP output to the caller.
service / on new functions:HttpListener() {
    resource function get hello(string name) returns string {
        return string `Hello,  ${name}!`;
    }
}
```
3. Use `bal build` to generate the Azure Function artifacts.
```
$ bal build --cloud="azure_functions"
```
4. Execute the Azure CLI command given by the compiler to create and publish the functions by replacing `<function_app_name>` with your respective function app name.
```
$ func azure functionapp publish <function_app_name> --script-root target/azure_functions
```
5. Execute the command below to invoke the function by replacing <function_app_name> with your respective function app name.
```
$ curl https://<function_app_name>.azurewebsites.net/hello\?name\=Jack
```

### CI/CD with Azure Function

This GitHub Action workflow automates the continuous integration and continuous deployment (CI/CD) process for a Ballerina project.
It is triggered by every push to the repository and automatically builds the project.

```yaml
name: Ballerina CI/CD with Azure Functions

on: [push]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the Repository
      - name: Checkout
        uses: actions/checkout@v2

      # Step 2: Build the Ballerina Application
      - name: Build Ballerina Application
        run: bal build

      # Step 3: Set up Azure Functions Core Tools
      - name: Set up Azure Functions Core Tools
        uses: philippelemaire/install-azure-functions-core-tools@v1

      # Step 4: Deploy to Azure Functions
      - name: Azure Functions Action
        uses: Azure/functions-action@v1
        with:
          app-name: 'your-function-app-name'
          package: './'
        env:
          AZURE_FUNCTIONAPP_PUBLISH_PROFILE: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISH_PROFILE }}

      # Optional: Test the Azure Function
      - name: Invoke Azure Function
        run: |
          curl https://your-function-app-name.azurewebsites.net/api/your-function-name
```
- **Step 01:** The push event can initiate a build and deployment process
- **Step 02:** This step compiles the Ballerina application to generate an executable JAR file. The `bal build` command compiles the code and packages it, making it ready for deployment.
- **Step 03:** Install the Azure Functions Core Tools, which are necessary for deploying and testing Azure Functions in this GitHub Actions environment.
- **Step 04:** Deploy the built Ballerina application to an Azure Function App. This step uploads the packaged function to Azure and configures it for serverless execution.

For more reference,
- See [AWS Lambda](https://ballerina.io/learn/aws-lambda/) for more information.
- See [Azure Functions](https://ballerina.io/learn/azure-functions/) for information about deployment options that can be used in Azure Functions.
