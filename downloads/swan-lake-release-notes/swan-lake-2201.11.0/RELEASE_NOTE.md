---
layout: ballerina-left-nav-release-notes
title: 2201.11.0 (Swan Lake) 
permalink: /downloads/swan-lake-release-notes/2201.11.0/
active: 2201.11.0
redirect_from: 
    - /downloads/swan-lake-release-notes/2201.11.0
    - /downloads/swan-lake-release-notes/2201.11.0-swan-lake/
    - /downloads/swan-lake-release-notes/2201.11.0-swan-lake
    - /downloads/swan-lake-release-notes/
    - /downloads/swan-lake-release-notes
---

## Overview of Ballerina Swan Lake Update 10 (2201.11.0)

<em> Swan Lake Update 11 (2201.11.0) is the eleventh update release of Ballerina Swan Lake, and it includes a new set of features and significant improvements to the compiler, runtime, Ballerina library, and developer tooling. It is based on the 2024R1 version of the Language Specification.</em> 

## Update Ballerina

Update your current Ballerina installation directly to 2201.11.0 using the [Ballerina Update Tool](/learn/update-tool/) as follows.

1. Run `bal update` to get the latest version of the Update Tool.
2. Run `bal dist update` to update to this latest distribution.

## Install Ballerina

If you have not installed Ballerina, download the [installers](/downloads/#swanlake) to install.

## Language updates

### New features

#### `data.xmldata` module

- Introduced XML schema definition (XSD) Sequence and Choice support for the `data.xmldata` module.
- Introduced union type support for `xml` operations in the `data.xmldata` module.
- Introduced singleton, union of singletons, and enum support for `xml` operations in the `data.xmldata` module.

#### `data.csv` module

- Introduced constraint validation support, allowing validation of the output against constraints specified in the target type.
- Introduced support for parsing CSV with union types as expected types.

### Improvements

#### Support for XML Step Extensions in XML Step Expression

The XML step expression now supports step extensions, including method invocation, member access, filtering, and combinations of these.

```ballerina
public function main() {
    xml x = xml
    `<item><!--comment--><name>T-shirt</name><price>19.99</price><brand><name>nike</name></brand></item>
      <item><?data?><name>Backpack</name><price>34.99</price><brand><name>adidas</name></brand></item>`;

    // Evaluates to `<name>nike</name><name>adidas</name>`
    xml x1 = x/**/<name>[1];

    // Evaluates to `<name>nike</name><name>adidas</name>`
    xml x2 = x/<brand>.children();

    // Evaluates to `<price>19.99</price><price>34.99</price>`
    xml x3 = x/*.<price>;

    // Evaluates to `<!--comment--><?data?>`
    xml x4 = x/*[0].filter(y => y is xml:Comment || y is xml:ProcessingInstruction);
}
```

### Bug fixes

To view bug fixes, see the [GitHub milestone for Swan Lake Update 11 (2201.11.0)](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+label%3ATeam%2FCompilerFE+milestone%3A2201.11.0+is%3Aclosed+label%3AType%2FBug).

## Runtime updates

### New features

### Improvements

### Bug fixes

To view bug fixes, see the [GitHub milestone for Swan Lake Update 11 (2201.11.0)](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+milestone%3A2201.11.0+label%3ATeam%2FjBallerina+label%3AType%2FBug+is%3Aclosed).

## Ballerina library updates

### New features

#### `http` package

- Added relaxed binding support for service and client data binding. This provides the flexibility to bind nil values to optional fields and absent values to nilable fields.

  ```ballerina
  // Enable relaxed data binding on the client side.
  http:Client httpClient = check new("http://localhost:9090", laxDataBinding = true);
  
  // Enable relaxed data binding on the server side.
  @http:ServiceConfig {laxDataBinding: true}
  service /api on new http:Listener(9090) {
  }
  ```

### Improvements

#### `http` package

- Added `anydata` support for `setPayload` methods in the request and response objects.
- Improved the `@http:Query` annotation to overwrite query parameter names in clients.
- Improved the `@http:Query` annotation to overwrite query parameter names in services.
- Added header name mapping support in record fields.
- Migrated client and service data binding to use the `toJson` and `parserAsType` functions from the  `ballerina/data.jsondata` module instead of the `fromJsonWithType` function from the `ballerina.lang.value` module. This change improves how JSON data is converted to Ballerina records and vice versa, by allowing field names to be overridden using the `jsondata:Name` annotation.
- Added support to configure the server name to be used in the SSL SNI extension.

### Deprecations

### Bug fixes

To view bug fixes, see the [GitHub milestone for Swan Lake Update 11 (2201.11.0)](https://github.com/ballerina-platform/ballerina-library/issues?q=milestone%3A2201.11.0+is%3Aclosed+label%3AType%2FBug).

## Developer tools updates

### New features

#### Language Server

#### CLI

#### OpenAPI tool
- Introduced the `flatten` sub-command, which flattens the OpenAPI contract file by moving all the inline schemas to the components section. The output is a modified OpenAPI contract.

  ```
  $ bal openapi flatten <openapi.yaml>
  ```
- Introduced the `align` sub-command, which aligns the OpenAPI contract file according to Ballerina's best naming practices. The Ballerina name extensions are added to the schemas which can not be modified directly. The output is a modified OpenAPI contract.

  ```
  $ bal openpai align <openapi.yaml>
  ```
- Add code generation support with the new Ballerina name extensions. These extensions are mapped as relevant annotations in the generated types, parameters and record fields.

  For example,
  ```yaml
  ...
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
              default: []
            x-ballerina-name: artists  --->// Ballerina name extension
        responses:
          "200":
            description: Ok
            content:
              application/json:
                schema:
                  type: array
                  items:
                    $ref: "#/components/schemas/Album"
  ```
  Generated Ballerina service type code,
  ```ballerina
  ...
  resource function get albums(@http:Query {name: "_artists_"} string[] artists = []) returns Album[];
  ...
  ```
  This code generation support is available for client, service implementation, and service type code generation.


- Added support for relaxed data binding on the client side payload. This enables, `nil` values are treated as optional, and absent fields are handled as `nilable` types.

### Improvements

#### Language Server

### Bug fixes

To view bug fixes, see the GitHub milestone for Swan Lake Update 11 (2201.11.0) of the repositories below.

- [Language server](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+label%3ATeam%2FLanguageServer+milestone%3A2201.11.0+is%3Aclosed+label%3AType%2FBug+)
- [OpenAPI](https://github.com/ballerina-platform/ballerina-library/issues?q=milestone%3A2201.11.0+is%3Aclosed+label%3Amodule%2Fopenapi-tools+label%3AType%2FBug)

## Ballerina packages updates

### New features

### Improvements

### Bug fixes

## Backward-incompatible changes
