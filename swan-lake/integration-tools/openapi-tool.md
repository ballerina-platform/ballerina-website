---
layout: ballerina-openapi-support-left-nav-pages-swanlake
title: OpenAPI tool
description: Check out how the Ballerina OpenAPI tool makes it easy for you to start developing a service documented in an OpenAPI contract.
keywords: ballerina, programming language, openapi, open api, restful api
permalink: /learn/openapi-tool/
active: openapi-tool
intro: The OpenAPI contract is a specification that creates a RESTful contract for APIs by detailing all of its resources and operations in a human and machine-readable format for easy development, discovery, and integration. Ballerina Swan Lake supports the OpenAPI contract version 3.0.0 onwards.
--- 

Ballerina OpenAPI tool makes it easy for you to start the development of a service documented in an OpenAPI contract in Ballerina by generating a Ballerina service and client skeletons. It enables you to take the code-first API design approach by generating an OpenAPI contract for the given service implementation.

## Usage

The Ballerina OpenAPI tool support provides the following capabilities.

 1. Generate Ballerina service/client stubs from a given OpenAPI contract file using the CLI tool.
 2. Export the OpenAPI definition from a given Ballerina service implementation using the CLI tool.
 3. Validate the service implementation compliance with a provided OpenAPI contract using the OpenAPI annotation.
  >**Info:** The OpenAPI compiler plugin allows you to validate a service implementation against an OpenAPI contract during the compile time. This plugin ensures that the implementation of a service does not deviate from its OpenAPI contract. 

### OpenAPI to Ballerina CLI usage

The OpenAPI to Ballerina command supports several usages in the Ballerina OpenAPI tool as follows.

```
$ bal openapi [-i | --input] <openapi-contract-file-path> 
              [-o | --output] <output-location>
              [--mode] <mode-type>
              [--tags] <tag-names> 
              [--operations] <operation-names> 
              [-n | --nullable]
              [--license] <license-file-path> 
              [--with-tests]
              [--status-code-binding] [--mock] [--with-service-contract]
              [--single-file] [--use-sanitized-oas]
```

### Ballerina to OpenAPI CLI usage

The Ballerina to OpenAPI command supports several usages in the Ballerina OpenAPI tool as follows.

```
$ bal openapi [-i | --input] <ballerina-service-file-path> [--json]
              [-s | --service] <current-service-name>
              [-o | --output] <output-location>
```

### Align OpenAPI contract CLI usage

The `align` subcommand of the Ballerina OpenAPI tool supports the following options.

```
bal openapi align [-i | --input] <openapi-contract-file-path>
                  [-o | --output] <output-file-path>
                  [-n | --name] <generated-file-name>
                  [-f | --format] [json|yaml]
                  [-t | --tags] <tag-names>
                  [--operations] <operation-names>
```

### Flatten OpenAPI contract CLI usage

The `flatten` subcommand of the Ballerina OpenAPI tool supports the following options.

```
bal openapi flatten [-i | --input] <openapi-contract-file-path>
                    [-o | --output] <output-file-path>
                    [-n | --name] <generated-file-name>
                    [-f | --format] [json|yaml]
                    [-t | --tags] <tag-names>
                    [--operations] <operation-names>
```

## Command options

The below command-line arguments can be used with the command.

### OpenAPI to Ballerina command options

The command-line arguments below can be used with the command for each particular purpose as described below. 

| Command option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Mandatory/Optional |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`           | The path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                                                                                                                                                                                                                                                                | Mandatory          |
| `-o \| --output`          | The Ballerina files are generated at the same location from which the `bal openapi` command is executed. You can point to another directory location by using the `(-o\|--output).` flag.                                                                                                                                                                                                                                                                         | Optional           |
| `--mode`                  | Mode type can be either a service or client. The Ballerina service and client are generated according to the mode. Without the `--mode`, it generates both service and client stubs for the given OpenAPI contract.                                                                                                                                                                                                                                               | Optional           |
| `--tags`                  | To generate the Ballerina client or service stub with a subset of tags defined in the OpenAPI contract, use the `--tags` option and specify the tags you need as specified in the OpenAPI definition.<br><br>**E.g.,** `bal openapi -i <openapi-contract>  [--tags < "tag1","tag2">]`                                                                                                                                                                             | Optional           |
| `--operations`            | To generate the Ballerina client or service stub with a subset of operations defined in the OpenAPI contract, use the `--operations` option and specify the operations you need as specified in the OpenAPI definition.<br><br>**E.g.,** `bal openapi -i <openapi-contract> [--operations <"op1", "op2">]`                                                                                                                                                        | Optional           |
| `--license`               | To generate the Ballerina files with the given copyright or license header, you can use this `--license` flag with your copyright text.<br><br>**E.g.,** `bal openapi -i <openapi-contract> [--license <license-file-path>]`                                                                                                                                                                                                                                      | Optional           |
| `-n \|--nullable`         | If your OpenAPI contract includes JSON schema properties that are not marked as `nullable:true`, they may return as null in some responses. It results in a JSON schema to Ballerina record data binding error. If you suspect this can happen for any property, it is safe to generate all data types in the generated record with Ballerina nil support by turning on this flag.<br><br>**E.g.,** `bal openapi -i <openapi-contract> [-n \|--nullable]`    | Optional           |
| `--with-tests`            | It works with the client generation command and generates a boiler-plate test for all the remote methods of the generated client.                                                                                                                                                                                                                                                                                                                                 | Optional           |
| `--client-methods`        | This option can be used in the client generation to select the client method type, which can be `resource` or `remote`. (The default option is `resource`).                                                                                                                                                                                                                                                                                                                                                                                           |  Optional         |
| `--status-code-binding`   | This option can be used in the client generation to generate the client methods with status code response binding. | Optional |
| `--mock`                  | This option can be used to switch client generation to generate a mock client for the given OpenAPI contract.  | Optional |
|`--with-service-contract`  | This option can be used to generate the service contract type for the given OpenAPI contract. | Optional |
| `--single-file`           | This option can be used to generate the Ballerina service or client with related types and utility functions in a single file. | Optional |
| `--use-sanitized-oas`     | This is an experimental feature. This option enables service/client code generation by modifying the given OAS to follow Ballerina language best practices. | Optional |

### Ballerina to OpenAPI command options

The command-line arguments below can be used with the command for each particular purpose as described below.

| Command option    | Description                                                                                                                                                                                               | Mandatory/Optional |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \|--input`    | This specifies the path of the Ballerina service file (e.g., `my-service.bal`).                                                                               | Mandatory          |
| `--json`          | Generate the Ballerina service to OpenAPI output as JSON. The default is YAML.                                                                                                                            | Optional           |
| `-s \| --service` | This service name is used to identify the service that needs to be documented as an OpenAPI contract.                                                                                                | Optional           |
| `-o\|--output`    | Location of the generated OpenAPI contract. If this path is not specified, the output is written to the same directory from which the command is run.                                                | Optional           |

### Align OpenAPI contract command options

The `align` subcommand of the Ballerina OpenAPI tool supports the following options.

| Command option            | Description                                                                                                                                                                                                               | Mandatory/Optional |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`           | The path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                        | Mandatory          |
| `-o \| --output`          | The directory location where the aligned OpenAPI contract will be generated. The default location is same as the location from which the `bal openapi align` command is executed.                   | Optional           |
| `-n \| --name`            | The given name will be used to save the aligned OpenAPI contract. The default name is `aligned_ballerina_openapi`.                                                                                                              | Optional           |
| `-f \| --format`          | The aligned OpenAPI contract will be saved in the given format. The format can be either JSON or YAML. The default format is same as the input file format.                                                              | Optional           |
| `-t \| --tags`            | The aligned OpenAPI contract will only have the operations with the given tags.                                                                                                                                         | Optional           |
| `--operations`            | The aligned OpenAPI contract will only have the given operations.                                                                                                                                                       | Optional           |

### Flatten OpenAPI contract command options

The `flatten` subcommand of the Ballerina OpenAPI tool supports the following options.

| Command option            | Description                                                                                                                                                                                                               | Mandatory/Optional |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`           | The path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                        | Mandatory          |
| `-o \| --output`          | The directory location where the flattened OpenAPI contract will be generated. The default location is same as the location from which the `bal openapi flatten` command is executed.                   | Optional           |
| `-n \| --name`            | The given name will be used to save the flattened OpenAPI contract. The default name is `flattened_openapi`.                                                                                                              | Optional           |
| `-f \| --format`          | The flattened OpenAPI contract will be saved in the given format. The format can be either JSON or YAML. The default format is same as the input file format.                                                              | Optional           |
| `-t \| --tags`            | The falttened OpenAPI contract will only have the operations with the given tags.                                                                                                                                         | Optional           |
| `--operations`            | The falltened OpenAPI contract will only have the given operations.                                                                                                                                                       | Optional           |

## Generate Ballerina services from OpenAPI Contracts 

If you are an API developer who prefers the **design-first approach**, you can use an existing or your OpenAPI definition to generate Ballerina services using the `bal openapi` CLI command as follows.

### Generate service implementation for given OpenAPI contract

```
$ bal openapi -i <openapi-contract> --mode service
```

The generated service can be used as a code template to start the service implementation.

For example,

```
$ bal openapi -i store.yaml --mode service
```

Service implementations  representation

```ballerina
import ballerina/http;

listener http:Listener ep0 = new (9090, config = {host: "localhost"});

service /store on ep0 {
    resource function get store() returns Inventory|http:Accepted {
        // logic here
    }

    resource function post store(Inventory payload) {
        //logic here
    }
}
```

This generates a Ballerina service in a file named `store_service.bal` and relevant schemas in a file named `types.bal` for the `store.yaml` OpenAPI contract as depicted below. The above command can be run from anywhere on the execution path. It is not mandatory to run it from within a Ballerina package.

```
The service generation process is complete. The following files were created.
-- store_service.bal
-- types.bal
```

### Generate service contract object for given OpenAPI contract

OpenAPI Specification (OAS) is a way to describe the service interface of REST APIs. Counterpart of this in Ballerina is service object types. This `--with-service-contract` is to enable code generation for the Ballerina service contract object type.

For example,

```
$ bal openapi -i store.yaml --mode service --with-service-contract
```

Service contract object type representation,

```ballerina
import ballerina/http;

@http:ServiceConfig {basePath: "/store"}
type OASServiceType service object {
    *http:ServiceContract;
    resource function get store() returns Inventory|http:Accepted;
    resource function post store(@http:Payload Inventory payload) returns http:Accepted|ErrorPayloadBadRequest;
};
```

This generates a Ballerina service in a file named `service_contract.bal` and relevant schemas in a file named `types.bal` for the `store.yaml` OpenAPI contract as depicted below. The above command can be run from anywhere on the execution path. It is not mandatory to run it from within a Ballerina package.

```
The service generation process is complete. The following files were created.
-- service_contract.bal
-- types.bal
```

### Generate from tags

To generate the Ballerina service stub with a subset of tags defined in an OpenAPI contract, use the `--tags` option and specify the tags you need as specified in the OpenAPI definition.

```
$ bal openapi -i <openapi-contract> [--tags <"tag1","tag2">]
```

For example, 

```
$ bal openapi -i hello.yaml --tags "pets", "list"
```

Once you execute the command, only the operations related to the given tags get included in the generated service file.

## Generate Ballerina service contract type from OpenAPI Contracts

By generating a service contract type directly from the OpenAPI contract, you can design services that are contract-compliant from the outset, following a service contract-first approach. 
In addition, centralizing metadata within the service contract type results in a cleaner, more maintainable codebase.

For example, 

```
$ bal openapi -i hello.yaml --mode service --with-service-contract
```

## Export OpenAPI contracts from Ballerina services

If you prefer to follow the **code-first approach**, you can convert your Ballerina service APIs into human-readable or machine-readable documents such as OpenAPI documents by using the Ballerina to OpenAPI CLI Tool as follows.

Export the Ballerina service to an OpenAPI contract 3.0.0 definition. For the export to work properly, the input Ballerina service should be defined using the basic service and resource-level HTTP annotations.

```
$ bal openapi [-i | --input] <ballerina-service-file-path> [(-o | --output) <output-location>]
```

The `ballerina-service-file-path` command option specifies the path of the ballerina service file (e.g., `my_api.bal`) and is mandatory.

If your Ballerina file includes multiple services, this command generates the OpenAPI contract for each service in the Ballerina file.

>**Info:** With this command, you can use either the service contract object type or the service implementation to generate an OpenAPI contract.

### Export in JSON format

Use the `--json` flag If you need the Ballerina service to OpenAPI output in JSON. The default is YAML.

```
$ bal openapi -i <ballerina-resource-file> [--json]
```

### Export for a specific service

If you need to document an OpenAPI contract for only one given service (when there are multiple), use the following command, specifying the service name as the `absolute-resource-path`.

```
$ bal openapi -i <ballerina-resource-file> [-s|--service] <service-name>
```

For example,

```
$ bal openapi -i helloService.bal
```

This generates the OpenAPI contracts for the Ballerina services in the `hello_service.bal` Ballerina file.

```
$ bal openapi -i helloService.bal -s "/hello"
```

This generates the OpenAPI contracts for the Ballerina service in the `hello_service.bal` Ballerina file
of which the `absolute-resource-path` is `/hello`. 

### Export with a given metadata information

#### Export with metadata using the `@openapi:ServiceInfo` annotation.

You can use the `@openapi:ServiceInfo` annotation for specifying the meta data such as title, description, email, contact information and version information of the OpenAPI contract as follows.

```ballerina
@openapi:ServiceInfo {
    contract: "/path/to/openapi.json|yaml",
    title: "Store Management",
    version: "0.1.0"
}    
```

>**Info:** These `contract`, `title`, `version` and all the other fields are all optional attributes and can be used as described below.

| Field Name               | Description                                                                                                                                                                                                                                                                                                                                                           | Mandatory/Optional |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `contract: string`       | A path to the OpenAPI contract as a string and the OpenAPI file can either be `.yaml` or `.json`. When you use the Ballerina to OpenAPI tool, it provides an attached OpenAPI contract as the output for a given service. If this attribute is not provided, then the tool generates an OpenAPI contract(OAS) contract for the given Ballerina file content.     | Optional           |
| `title: string`          | You can use this to add the title of the `info` section in the generated OpenAPI contract. If this attribute is not provided, then the tool takes the absolute base path as the title to the OAS contract.                                                                                                                                                            | Optional           |
| `version: string`        | You can use this to add the version of the `info` section in the generated OpenAPI contract. If this attribute is not provided, then the tool picks the Ballerina package version as the OAS version.                                                                                                                                                                 | Optional           |
| `description: string`    | You can use this to add the description of the `info` section in the generated OpenAPI contract. Brief description of the API, outlining its purpose, features, and any other relevant details that help users understand what the API does and how to use it.                                                                                                        | Optional           |
| `email: string`          | You can use this to add the email address to `contact` section in OpenAPI contract. This desribes email details for the API provider or support .                                                                                                                                                                                                                     | Optional           |
| `contactName: string`    | You can use this attribute to add the name of the person or organization responsible for the API.                                                                                                                                                                                                                                                                     | Optional           |
| `contactURL: string`     | You can use `contactURL` to add the URL to a web page with more information about the API, the provider, or support.                                                                                                                                                                                                                                                  | Optional           |
| `termsOfService: string` | You can use this to add the URL details to the terms of service for the API.                                                                                                                                                                                                                                                                                          | Optional           |
| `licenseName: string`    | The `licenseName` is used to add the name of the license under which the API is provided for `contact` section.                                                                                                                                                                                                                                                       | Optional           |
| `licenseURL: string`     | You can use this to add the URL details regarding the full text of the license.                                                                                                                                                                                                                                                                                       | Optional           |

For example,

**Ballerina service file with the OpenAPI annotation**

```ballerina
@openapi:ServiceInfo {
    title: "Store Management APIs",
    version: "1.1.0",
    email: "mark@abc.com"
}
service /greet on new http:Listener(9090) {
...
}
```

**Generated OpenAPI contract with the given details**

```openapi
openapi: 3.0.1
info:
  title: Store Management APIs
  version: 1.1.0
  contact:
    email: mark@abc.com
...
```

#### Export with metadata using the `@openapi:ResourceInfo` annotation.

You can use the `@openapi:ResourceInfo` annotation for specifying the meta data such as operation id, summary, tags information and example details of the OpenAPI operation as follows. This annotation used to be attached with the resource functions.

| Field Name      | Description                                                                                                                                                                                                                                                                                                                                                                     | Mandatory/Optional |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `operationId: string` |  You can use this to update operation Id in particuler operation in OpenAPI contract(OAS) | Optional |
| `summary: string` | This helps you to add summary for the particuler operation in OAS | Optional |
| `tags: string[]` | Specifies the tag in the list map to the tags list in operation | Optional |  

For example,

**Ballerina resource function with the OpenAPI annotation**

```ballerina
    @openapi:ResourceInfo {
       operationId: "createStoreData"
       summary: "API for adding store amount",
       tags: ["retail", "rate"]
    }
    resource function post store(Inventory payload) returns string? {
    }
```

**Generated OpenAPI contract with the given details**

```yaml
...
paths:
  /store:
    post:
      tags:
      - retail
      - rate
      summary: API for adding store amount
      operationId: createStoreData
      requestBody:
        content:
          application/json:
            schema:
    ...
```

### Export with given examples information

An API specification can include examples for parameters, responses, schemas (data models), individual properties in
schemas and request bodies. Following the below options, you can generate OAS with examples.

#### Export example using `@openapi:ResourceInfo` annotation

##### Add response examples

Here, you need to provide example details according to the structure shown in the sample below.

```ballerina
@openapi:ResourceInfo {
        ...
        examples: {
            "response": {
                <status-code>: {
                    "examples": {
                        <media-type>: {
                            <name-for-example>: {
                                "value": {
                                    ...
                                }
                            },
                            <name-for-example>: {
                                "filePath": <path>
                            }
                        }
                    }
                }
            }
        }
    }
...
```

Structure Explanation:
 1. Examples Container: The **examples** key is a container for all example details related to responses.
 2. Response Object: Inside **examples**, the **response** key groups examples that pertain to response status codes.
 3. Status Code as Key: Under response, each key is a status code (e.g., "200").
 4. MediaType as Key: Under each status code, the **examples** key contains another map where the keys are media types (e.g., "application/json").
 5. Record with Example Details: 
    - For each media type, you can provide examples using either the **value** field or the **filePath** field.
        - The **value** field is used to include the example inline.
        - The **filePath** field is used to specify a .json file that contains the example.

```ballerina
...
service /convert on new http:Listener(9090) {
...
    @openapi:ResourceInfo {
       operationId: "getStoreData",
       examples: {
            "response": {
                "200": {
                    "examples": {
                        "application/json": {
                            "store01": {
                                "value": {
                                    "materials": "Wood",
                                    "status": "InProgress",
                                    "item": "Table",
                                    "amount": 120
                                }
                            },
                            "store02": {
                                "filePath": "storeExamples.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    resource function get store() returns Inventory? {
    }
...
}
```

**Generated OpenAPI contract with the given details**

```yaml
paths:
  /store:
    get:
      operationId: getStoreData
      responses:
        "200":
          description: Ok
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Inventory'
              examples:
                store01:
                  value:
                    materials: Wood
                    status: InProgress
                    item: Table
                    amount: 120
                store02:
                  value:
                    item: Table
                    amount: 100
                    materials: Plastic
                    status: Done
        "202":
          description: Accepted
```

##### Add request body examples

Here, you need to provide example details according to the structure shown in the sample below.

```ballerina
@openapi:ResourceInfo {
        examples: {
            "requestBody": {
                <media-type>: {
                    <name-for-example>: {
                        "filePath": <file path>
                    },
                    <name-for-example>: {
                        "value": {
                            ...
                        }
                    }
                }
            }
        }
    }
```

 1. Examples Container: The **examples** key is a container for all example details related to request bodies.
 2. Request Body Object: Inside examples, the **requestBody** key groups examples that pertain to request bodies.
 3. MediaType as Key: Under **requestBody**, the key is the media type (e.g., "application/json").
 4. Example Details: For each media type, examples can be provided using either the value field (for inline examples) or the filePath field (for external JSON files).

```ballerina
...
@openapi:ResourceInfo {
        examples: {
            "requestBody": {
                "application/json": {
                    "payloadStore01": {
                        "filePath": "storeExamples.json"
                    },
                    "PayloadStore02": {
                        "value": {
                            "materials": "Wood",
                            "status": "InProgress",
                            "item": "Table",
                            "amount": 120
                        }
                    }
                }
            }
        }
    }
    resource function post store(Inventory payload) {
    }
...
```

**Generated OpenAPI contract with the given details**

```yaml
...
paths:
 /store:
    post:
      operationId: postStore
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Inventory'
            examples:
              payloadStore01:
                value:
                  item: Table
                  amount: 100
                  materials: Plastic
                  status: Done
              PayloadStore02:
                value:
                  materials: Wood
                  status: InProgress
                  item: Table
                  amount: 120
        required: true
      responses:
        "202":
          description: Accepted
...
```

As explained in the example section, you can use this annotation for parameters, record fields, and record types.

#### Export example using `@openapi:Example` annotation

This annotation is used to render a single example in the OpenAPI contract. It is attached to parameters, record types and record field.

##### Ballerina code sample for object level example mapping

```ballerina
@openapi:Example {
  value: {
    id: 10,
    name: "Jessica Smith"
  }
}
type User record {
  int id;
  string name
}
```

**Generated OpenAPI contract with the given details**

```
...
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
      example:
        id: 10
        name: Jessica Smith
...
```

##### Ballerina code sample for parameter level example mapping

```ballerina
...
resource function get path(@openapi:Example{value: "approved"} "approved"|"pending"|"closed"|"new" status) {
}
...
```

**Generated OpenAPI contract with the given details**

```yaml
...
parameters:
  - in: query
    name: status
    schema:
      type: string
      enum: [approved, pending, closed, new]
      example: approved
...
```

##### Ballerina code sample for object property level example mapping

```ballerina
type User record {
   @openapi:Example { value: 1 }
   int id;
   @openapi:Example { value: "Jessica Smith" }
   string name;
}
```

**Generated OpenAPI contract with the given details**

```yaml
components:
  schemas:
    User:    # Schema name
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 1          # Property example
        name:
          type: string
          example: Jessica Smith  # Property example
```

#### Export example using `@openapi:Examples` annotation

>**Info:** This annotation is used to render list of examples in the OpenAPI contract. It is attached to parameters and record types.

##### Ballerina code sample for object level examples mapping

```yaml
@openapi:Examples {
  Jessica: { // Example 1
    value: {
       id: 10,
       name: "Jessica Smith"
    }
  },
  Ron: { // Example 2
    value: {
       id: 11,
       name: "Ron Stewart"
    }
  } 
}
type User record {
  int id;
  string name
}
```

**Generated OpenAPI contract with the given details**

```yaml
...
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
      examples:
          Jessica:   # Example 1
            value:
              id: 10
              name: Jessica Smith
          Ron:       # Example 2
            value:
              id: 11
              name: Ron Stewart
...
```

As explained in the example section, you can use this annotation for parameters, record fields, and record types.

## Generate Ballerina clients from OpenAPI definitions

The client generated from an OpenAPI definition can be used in your applications to call the service defined in the OpenAPI file. If you want to generate only the Ballerina client, you can set the `mode` as the `client` when running the OpenAPI tool. 

>**Note:** Before generating your client using the command-line tool, please check if a pre-generated client for your API already exists in the <a href="https://central.ballerina.io/" target="_blank">Ballerina Central</a>. (If so, you can refer to the client's API documentation for more information on how to use the pre-generated client in your code.)

```
$ bal openapi -i <openapi-contract> --mode client
```

For example, 

```
$ bal openapi -i hello.yaml --mode client
```

This generates a Ballerina client stub (`client.bal`), a util file (`utils.bal`) for the relevant utils methods related to the client stub, and a schemas file (`types.bal`) for the `hello.yaml` OpenAPI contract. The above command can be run from anywhere on the execution path. It is not mandatory to run it from within a Ballerina package.

```
Client generated successfully. The following files were created. 
-- client.bal
-- types.bal
-- utils.bal
```

### Generate with boiler-plate tests

Use the `--with-tests` flag in the client mode to generate a Ballerina client with boilerplate test cases for all the remote methods available in it.

```
$ bal openapi -i <openapi-contract> [--mode client] [--with-tests]
```

For example,

```
$ bal openapi -i hello.yaml --mode client --with-tests
```

In addition to the above-mentioned generated file, this generates a `test.bal` file in the default client generation.

### Generate with nillable types

>**Info:** This is an optional flag in the OpenAPI to Ballerina command.

If your OpenAPI contract includes JSON schema properties that are not marked as **nullable:true**, they may be returned as null in some responses which results in a JSON schema to Ballerina record data binding error. If you suspect this can happen for any property, it is safe to generate all data types in the generated record with Ballerina nil support by turning this flag on.

```
$ bal openapi -i <openapi-contract> [-n |--nullable]
```

### Generate with a given method type
Use the `--client-methods <resource|remote>` option to select the client method type, which can be `resource` or `remote`. (The default option is `resource`).

```
$ bal openapi -i <openapi-contract> --mode client --client-methods <resource|remote>
```

>**Info:** For more command options, see [OpenAPI to Ballerina CLI options](#openapi-to-ballerina-command-options).

### Generate mock client using included example in OAS

Introduces mock client generation with examples directly from the OpenAPI contract. Picture a developer tasked with integrating a new API: you can now effortlessly generate 
mock clients with examples which you documented in the OAS, test and validate integrations, and then seamlessly replace the mock client with the actual one when ready for production.

```
$ bal openapi -i <openapi-contract> --mode client --mock
```

OpenAPI contract sample,

```yaml
openapi: 3.0.1
...
paths:
  /store:
    get:
      operationId: getStoreData
      responses:
        "200":
          description: Ok
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Inventory'
              examples:
                store01:
                  value:
                    materials: Wood
                    status: InProgress
                    Item: Table
                    amount: 120
        "202":
          description: Accepted
components:
  schemas:
    Inventory:
      required:
      - Item
      - amount
      - materials
      - status
      type: object
      properties:
        materials:
          type: string
        status:
          type: string
        Item:
          type: string
        amount:
          type: integer
          format: int64
```

**Generated mock client for the example provided under the response**

```ballerina
public isolated client class Client {
 ...
    resource isolated function get store(map<string|string[]> headers = {}) returns Inventory|error? {
        return {"materials": "Wood", "status": "InProgress", "Item": "Table", "amount": 120};
    }
}
```

### Automate client generation

#### Update the `Ballerina.toml` file with OpenAPI tool configurations

Adding the following OpenAPI tool configurations to the `Ballerina.toml` file will generate a client during the package build. This eliminates the need to commit the generated code.

> **Info:** It is mandatory to provide `id` and `filePath` attributes for the OpenAPI tool configurations. The other attributes are optional.

The following is an example of the tool configuration usage in the `Ballerina.toml`.

```ballerina
[[tool.openapi]]
id = "client01"
filePath = "./openapi.yaml"
targetModule = "delivery"
options.mode = "client"
options.statusCodeBinding = true
options.tags = ["tag1", "tag2"]
options.operations = ["op1", "op2"]
options.nullable = true # (default value => false)
options.license = "./license.txt"
```

The below tool configuration can be used.

| Command option             | Description                                                                                                                                                                                                                                                                                                                                                                                                 | Mandatory/Optional |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `filePath`                 | The `filePath` tool option specifies the path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                                                                                                                                                                                                                          | Mandatory          |
| `id`                       | Id for the generated module.                                                                                                                                                                                                                                                                                                                                                                                | Mandatory          |
| `targetModule`             | The Ballerina files are generated at the given directory name in the Ballerina package.                                                                                                                                                                                                                                                                                                                     | Optional           |
| `options.mode`             | The supported mode type is `client`. It generates client stubs for the given OpenAPI contract.                                                                                                                                                                                                                                                                                                              | Optional           |
| `options.tags`             | To generate the Ballerina client stub with a subset of tags defined in the OpenAPI contract                                                                                                                                                                                                                                                                                                                 | Optional           |
| `options.operations`       | To generate the Ballerina client stub with a subset of operations defined in the OpenAPI contract, use the `options.operations` option and specify the operations you need as specified in the OpenAPI definition.                                                                                                                                                                                          | Optional           |
| `options.license`          | To generate the Ballerina files with the given copyright or license header, you can use this `options.license` option with the path to your copyright text.                                                                                                                                                                                                                                                 | Optional           |
| `options.nullable`         | If your OpenAPI contract includes JSON schema properties that are not marked as `options.nullable=true`, they may return as null in some responses. It results in a JSON schema to Ballerina record data binding error. If you suspect this can happen for any property, it is safe to generate all data types in the generated record with Ballerina nil support by turning on this flag.             | Optional           |
| `options.clientMethods`    | This option can be used in the client generation to select the client method type, which can be `resource` or `remote`. (The default option is `resource`).                                                                                                                                                                                                                                                 | Optional           |
| `options.statusCodeBinding`| This option can be used in the client generation to generate the client methods with status code response binding.                                                                                                                                                                                                                                                                                          | Optional           |


#### Update the Ballerina.toml file with OpenAPI tool configurations using OpenAPI CLI command

Executing the following OpenAPI `add` sub-command, along with the OpenAPI to Ballerina CLI options, will update the `Ballerina.toml` with OpenAPI tool configurations.

```
$ bal openapi add [-i | --input] <openapi-contract-file-path>
                  [--id] <client-id>
                  [--module] <target-module>
                  [--package] <ballerina-package-path>
```

For example,

```
$ bal openapi add -i <openapi-contract> --id <client_id> --module <target-module> --package <ballerina package path> --tags <"tag1","tag2">
```

| Command option      | Description                                                                                                                                                                                                                                                                                                                                                                     | Mandatory/Optional |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`   | The `-i\|--input` command option specifies the path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                                                                                                                                                                                                                                                                         | Mandatory          |
| `--id`          | Id for the generated module | Mandatory          |
| `--module`          | Module name for the generated client stub module (default will be generated directory)|  Optional        |
| `-p \|--package`    | The Ballerina package location to generate the Ballerina client or service stub.                                                                                                                                                                                                              |  Optional        |

>**Info:** For more command options, see [OpenAPI to Ballerina CLI options](#openapi-to-ballerina-command-options).

## Publish your client

To see your new client in Ballerina central in the future, follow the steps below to send a GitHub Pull Request to the WSO2 `openapi-connectors` repository to publish it.

1. Fork and clone the <a href="https://github.com/ballerina-platform/openapi-connectors" target="_blank">`openapi-connectors`</a> repository. Connectors generated from the Ballerina OpenAPI tool are managed in this repository.

2. Open the cloned repository and navigate to the `/openapi` directory.

3. Run the `bal new <connector_name> -t lib` command to create a new Ballerina package. 

4. Copy the [generated files](#generate-ballerina-clients-from-openapi-definitions) (i.e., `client.bal`, `types.bal`, and `utils.bal`) into the `<connector_name>` directory. 

5. Run the `bal build` command to check whether the newly-generated connector is compiling successfully. 

6. Run the necessary unit tests to verify the functionality of the generated connector.

7. Add the license header at the top of each `.bal` file. 

8. Add the <a href="https://github.com/ballerina-platform/ballerina-extended-library/discussions/77" target="_blank">`Package.md`</a> and <a href="https://github.com/ballerina-platform/ballerina-extended-library/discussions/78" target="_blank">`Module.md`</a> files.

9. Add a connector icon to the root of the connector. The icon needs to be a `.png` of 200x200 px size named as `icon.png`. 

10. Update the <a href="https://github.com/ballerina-platform/ballerina-extended-library/discussions/72" target="_blank">`Ballerina.toml` file</a>.

11. Run the `./gradlew build` command. 

12. Push the changes and create a Pull Request to the master branch of the `openapi-connectors` repository.

## Annotation reference

### The `@openapi:ServiceInfo` annotation

The `@openapi:ServiceInfo` annotation supports several usages in the Ballerina OpenAPI tool.

```ballerina
@openapi:ServiceInfo {
    contract: "/path/to/openapi.json|yaml",
    tags: ["store"],
    operations: ["op1", "op2"],
    failOnErrors: true // (default value => true),
    excludeTags: ["pets", "user"],
    excludeOperations: ["op1", "op2"],
    title: "store",
    version: "0.1.0",
    description: "API system description",
    email: "mark@abc.com",
    contactName: "ABC compaby",
    contactURL: "http://mock-api-contact",
    termsOfService: "http://mock-api-doc",
    licenseName: "ABC",
    licenseURL: "http://abc-license.com"
    embed: true // (default value => false)
}
service /greet on new http:Listener(9090) {
   ...
}
```

The attributes of the annotation are optional and can be used for each particular purpose as described below.

| Field Name                 | Description                                                                                                                                                                                                                                                                                                                               | Mandatory/Optional |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| `contract: string`          | Provides a path to the OpenAPI contract as a string and the OpenAPI file can either be a `.yaml` or `.json`.                                                                                                                                                                                                                              | Mandatory         |
| `tags: string[]`            | Specifies the tag in the list for the compiler to validate resources against operations that are tagged with it. If not specified, the compiler validates resources against all the operations defined in the OpenAPI contract.                                                                                                           | Optional          |
| `operations: string[]`      | Contains a list of operation names that need to be validated against the resources in the service. If not specified, the compiler validates resources against all the operations defined in the OpenAPI contract. If both tags and operations are defined, it validates against the union set of the resources.                          | Optional          |
| `excludeTags: string[]`     | Stores the tags that do not need to be validated. The annotation can not have both the `excludeTags` and `Tags` attributes at the same time.                                                                                                                                                                                              | Optional          |
| `excludeOperations: string[]`| Specifies the operations that do not need to be validated.                                                                                                                                                                                                                                                                                | Optional          |
| `failOnErrors: boolean`     | Turns off the validation when used with `false` in the annotation.                                                                                                                                                                                                                                                                        | Optional          |
| `title: string`             | Adds the title of the `info` section in the generated OpenAPI contract.                                                                                                                                                                                                                                                                   | Optional          |
| `version: string`           | Adds the version of the `info` section in the generated OpenAPI contract.                                                                                                                                                                                                                                                                 | Optional          |
| `description: string`       | You can use this to add the description of the `info` section in the generated OpenAPI contract. A brief description of the API, outlining its purpose, features, and any other relevant details that help users understand what the API does and how to use it.                                                                            | Optional          |
| `email: string`             | You can use this to add the email address to the `contact` section in the OpenAPI contract. This describes email details for the API provider or support.                                                                                                                                                                                 | Optional          |
| `contactName: string`       | You can use this attribute to add the name of the person or organization responsible for the API.                                                                                                                                                                                                                                         | Optional          |
| `contactURL: string`        | You can use `contactURL` to add the URL to a web page with more information about the API, the provider, or support.                                                                                                                                                                                                                      | Optional          |
| `termsOfService: string`    | You can use this to add the URL details to the terms of service for the API.                                                                                                                                                                                                                                                              | Optional          |
| `licenseName: string`       | You can use this to add the name of the license under which the API is provided.                                                                                                                                                                                                                                                          | Optional          |
| `licenseURL: string`        | You can use this to add the URL details regarding the full text of the license.                                                                                                                                                                                                                                                           | Optional          |
| `embed: string`             | Turns on generating OpenAPI documentation for the service for [introspection endpoint](https://ballerina.io/spec/http/#236-openapi-specification-resources) support when used with `true` in the annotation.                                                                                                                                                                                               | Optional          |

## OpenAPI Contract Modifier

### Modify the OpenAPI contract using Ballerina-Preferred naming conventions

The `align` subcommand alignes the OpenAPI contract file according to the naming conventions of Ballerina. The Ballerina-specific name extension `x-ballerina-name` is added to the schemas, including query names and object property names, which cannot be modified directly.

```
bal openapi align [-i | --input] <openapi-contract-file-path>
                  [-o | --output] <output-file-path>
                  [-n | --name] <generated-file-name>
                  [-f | --format] [json|yaml]
                  [-t | --tags] <tag-names>
                  [--operations] <operation-names>
```

The command-line options are as follows.

| Command option            | Description                                                                                                                                                                                                               | Mandatory/Optional |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`           | The path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                        | Mandatory          |
| `-o \| --output`          | The directory location where the aligned OpenAPI contract will be generated. The default location is same as the location from which the `bal openapi align` command is executed.                   | Optional           |
| `-n \| --name`            | The given name will be used to save the aligned OpenAPI contract. The default name is `aligned_ballerina_openapi`.                                                                                                              | Optional           |
| `-f \| --format`          | The aligned OpenAPI contract will be saved in the given format. The format can be either JSON or YAML. The default format is same as the input file format.                                                              | Optional           |
| `-t \| --tags`            | The aligned OpenAPI contract will only have the operations with the given tags.                                                                                                                                         | Optional           |
| `--operations`            | The aligned OpenAPI contract will only have the given operations.                                                                                                                                                       | Optional           |

For example,

**Input OpenAPI contract file:**

```yaml
paths:
  /albums:
    get:
      tags:
        - albums
      operationId: getAlbums
      parameters:
        - name: _artists_
          in: query
          schema:
            type: array
            items:
              type: string
      responses:
        "200":
          description: Ok
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/album"
components:
  schemas:
    album:
      required:
        - _id
        - artist
        - title
      type: object
      properties:
        _id:
          type: string
        title:
          type: string
        artist:
          type: string
      additionalProperties: false
```

**Output OpenAPI contract file:**

```yaml
paths:
  /albums:
    get:
      tags:
        - albums
      operationId: getAlbums
      parameters:
        - name: _artists_
          in: query
          schema:
            type: array
            items:
              type: string
          x-ballerina-name: artists   -->//Ballerina name extension
      responses:
        "200":
          description: Ok
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Album"
components:
  schemas:
    Album:
      required:
        - _id
        - artist
        - title
      type: object
      properties:
        _id:
          type: string
          x-ballerina-name: id
        artist:
          type: string
        title:
          type: string
      additionalProperties: false
```

### Modify the OpenAPI Contract by defining named objects for inline objects

The `flatten` subcommand makes the OpenAPI contract more readable by relocating all inline embedded schemas to the components section.

```
bal openapi flatten [-i | --input] <openapi-contract-file-path>
                    [-o | --output] <output-file-path>
                    [-n | --name] <generated-file-name>
                    [-f | --format] [json|yaml]
                    [-t | --tags] <tag-names>
                    [--operations] <operation-names>
```

The command-line options are as follows.

| Command option            | Description                                                                                                                                                                                                               | Mandatory/Optional |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `-i \| --input`           | The path of the OpenAPI contract file (e.g., `my-api.yaml` or `my-api.json`).                                                                                        | Mandatory          |
| `-o \| --output`          | The directory location where the flattened OpenAPI contract will be generated. The default location is same as the location from which the `bal openapi flatten ` command is executed.                   | Optional           |
| `-n \| --name`            | The given name will be used to save the flattened OpenAPI contract. The default name is `flattened_openapi`.                                                                                                              | Optional           |
| `-f \| --format`          | The flattened OpenAPI contract will be saved in the given format. The format can be either JSON or YAML. The default format is same as the input file format.                                                              | Optional           |
| `-t \| --tags`            | The falttened OpenAPI contract will only have the operations with the given tags.                                                                                                                                         | Optional           |
| `--operations`            | The falltened OpenAPI contract will only have the given operations.                                                                                                                                                       | Optional           |

For example,

**Input OpenAPI contract file:**

```yaml
...
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      responses:
        '200':
          description: An paged array of pets
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int64
                    name:
                      type: string
                    tag:
                      type: string
```
**Output OpenAPI contract file:**
```yaml
...
paths:
  /pets:
    get:
      tags:
        - pets
      summary: List all pets
      operationId: listPets
      responses:
        "200":
          description: An paged array of pets
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/InlineResponse200"
components:
  schemas:
    InlineResponse200:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
```
