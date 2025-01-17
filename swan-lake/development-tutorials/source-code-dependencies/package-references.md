---
layout: ballerina-organizing-code-left-nav-pages-swanlake
title: Package references
description: The sections below include information about the structure of a package directory. It explains the purpose of each file in a package.
keywords: ballerina, programming language, ballerina packages, package structure, package layout
permalink: /learn/organize-ballerina-code/package-references/
active: package-references
intro: The sections below include information about the structure of a package directory. It explains the purpose of each file in a package.
---

## Package layout

```
.
├── Ballerina.toml
├── Dependencies.toml
├── README.md
├── main.bal
├── utils.bal
├── generated/
│     ├── generated_service.bal
│     └── model/
├── tests/
│     ├── main_tests.bal
│     └── utils_tests.bal
├── resources/
│     └── app.png
├── modules/
│     ├── model/
│     └── module1.test/
├── documents/
├── sample.png
├── icon.png
└── target/
```

## The `Ballerina.toml` file

The `Ballerina.toml` identifies the directory as a Ballerina package. It contains all the meta information that is needed to build your package.

Below is an example of a simple `Ballerina.toml` file.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"

[build-options]
observabilityIncluded = true
```

### The `org` field

The organization is a logical name used for grouping modules together under a common namespace within a repository. 

Organization name is mandatory and can only contain alphanumerics, underscore, and the maximum length is 256 characters.

When you run the `bal new` command, the organization name by default will be set to the user name of your machine. You can choose to update the `Ballerina.toml` file to amend the organization name appropriately.

As described in [Define the organization](/learn/publish-packages-to-ballerina-central/#define-the-organization), the restrictions for the organization name of a package when publishing to <a href="https://central.ballerina.io/" target="_blank">Ballerina Central</a> should also be considered before choosing an organization name.


### The `name` field

The package name is an identifier used to refer to the package.

The name can only contain alphanumerics, underscore, period, and the maximum length is 256 characters.

If the package name is not provided in the `Ballerina.toml` file, then the current directory name is set as the package name. If there are any characters in the directory name mismatching the allowed regex, these will be replaced with the `_` character.

#### Hierarchical package names

When a package provides multiple functionalities, it is better to split it into multiple packages instead.  For scenarios like this, you can give a hierarchical name to the package.

For example, if you need to provide a set of APIs to communicate with AWS, you can choose to support APIs to AWS services using multiple packages such as `aws.s3`, `aws.sqs`, `aws.rds`, etc.

#### The split module condition

A `split module condition` occurs when the latest versions of two different packages contain the same module, resulting in a build failure. When using hierarchical package names, ensure that the package repository does not hold another package containing a module with the same name in its latest version.

For example, if you created and published to Ballerina Central, the `1.0.0` version of `aws.rds` package containing `aws.rds.mysql` module
and decide to move the `aws.rds.mysql` module to a separate package later, you need to follow the below steps.

1. Push a new version(`1.0.1`) of the `aws.rds` package that does not contain the `aws.rds.mysql` module
2. Push new `aws.rds.mysql` package

### The `version` field

Ballerina strictly follows the rules of <a href="https://semver.org/" target="_blank">Semantic Versioning</a>. Therefore, in general, you should follow the SemVer best practices when versioning a package.

*   If the package is in the initial stages of development, label the package with the zero major version (`0.x.y`). This will give the user a hint that API changes are frequent and that the package is far from being production-ready.

*   Use versions as three numeric parts `MAJOR.MINOR.PATCH` (E.g., `1.0.0`).
    *   Increment the patch version when only backward compatible bug fixes are introduced.
    *   Increment the minor version when new backward compatible functionality is introduced to the public API.
    *   Increment the major version when any backward incompatible changes are introduced to the public API.

*   When you are stabilizing the package to roll out to production, pre-release versions are suitable for versioning (E.g. `1.0.0-alpha`).
    Pre-release versions are not considered production-ready. Even though not frequent compared to the initial development phase, API changes are possible.

*   If the changes to pre-release versions are incremental, you can use the numeric pre-release versioning technique (E.g. `1.0.0-alpha.1`, `1.0.0-alpha.2`).

*   Once the package is production-ready, you can use a stable version (E.g. `1.0.0`). Any subsequent minor or patch releases of the same major version should be backward compatible and, should not break existing builds.

### The `visibility` field

By default, packages published to Ballerina Central are public, allowing visibility to all users. To limit access, you can designate a package as private by adding the `visibility` field to the `[package]` table. Private packages are accessible only to members of the associated organization. You can configure the access token in the `<USER_HOME>/.ballerina/Settings.toml` file to utilize the package as a dependency. 

For information on how to obtain an access token, see [prepare for publishing](/learn/publish-packages-to-ballerina-central/#prepare-for-publishing).

Below is an example on setting the visibility of a package to private.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
visibility = "private"
```

### The `readme` field

The readme field allows you to specify the primary documentation file for your package. By default, the README.md file located at the package's root directory serves as the primary documentation. However, you can override this behavior by providing a custom path to a Markdown file in the readme field. This enables you to use a different file as the primary documentation.

``` toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
readme = "docs/Reference.md"
```

### The `icon` field

The `icon` field accepts a path to an icon. The specified icon will be packaged into the `docs/` directory of the BALA.

Only the `.png` format is supported for the icon.

The below example shows how to specify an icon for the package.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
icon = "icon.png"
```

### The `include` field

You can provide paths to any additional resources, which need to be packed in the BALA file during the use of the `bal pack` command.

The `include` field accepts a string array, which contains the directory or file paths to include in the BALA. The included file paths will be packaged into the root of the BALA preserving its original structure. 

The paths should be relative to the package root directory and support the following patterns.

```toml
include = [
    "foo", # Any file/dir named 'foo'.
    "/bar", # Any file/dir named `bar` in the root dir of the package.
    "baz/", # Directories named `baz` (files are ignored).
    "/qux/", # Any dir named `qux` in the root dir.
    "*.html", # Any file with the `.HTML` extension. 
    "foo*bar.*", # Any file that has a name starting with `foo`,
                 # ending with `bar`,
                 # with any no of characters in the middle, 
                 # and ending with an extension after a dot.
    "plug?", # Any file/dir named `plug` followed by a single character
                # (e. g., 'plugr', 'plugz').
    "thud[ab]", # Any file/dir named `thuda` or `thudb`.
    "fred[q-s]", # Any file/dir named `fredq` to `thuds` in alphabetical order.
    "**/grault/garply", # A file/dir that has '/grault/garply' at the end of their paths.
    "waldo/xyzzy/**", # A file/dir that has `waldo/xyzzy/` at the beginning
                      # followed by the rest of the path.
    "babble/**/bar", # A path that has `babble` followed by any path in the middle
                     # ending with `bar`.
    "*.rs", # Files that has the `.rs` extension.
    "!corge.rs", # Exclude the `corge.rs` file from the selected paths of the patterns above.
    "include-resources/thud", # Direct dir path from the root is acceptable.
    "include-resources/x.js", # Direct file path from the root is acceptable.
    ]

```
The below example shows how a custom directory can be included in the BALA.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
include = ["documents", "sample.png"]
```

### The `keywords` field

The keywords field is used to specify a list of short phrases that describe the package. Keywords are helpful for users to discover the package in the Ballerina Central using the built-in search. These keywords are also listed under the `Keywords` section on the API documentation page in Ballerina Central.

The `keywords` field is optional and accepts a string array.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
keywords = ["service", "edi", "manufacturing"]
```

### The `authors` field

The `authors` field is used to specify the authors who contributed to the package. This information will be listed under the `Contributors` section on the API documentation page in Ballerina Central. 

The `authors` field is optional and accepts a string array.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
authors = ["John Doe", "Jane Doe"]
```

### The `repository` field

The `repository` field is used to specify the URL of the repository where the source code of the package is hosted. This will be listed as `Source Repository` on the API documentation page in Ballerina Central.

The `repository` field is optional and accepts a string.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
repository = "https://github.com/john-doe/module-winery"
```

### The `license` field

The `license` field is used to specify the licenses under which the package is distributed. This will be listed as `License` under the `Metadata` section on the API documentation page in Ballerina Central.

The `license` field is optional and accepts a string array.

```toml
[package]
org = "samjs"
name = "winery"
version = "0.1.0"
license = ["Apache-2.0"]
```

### Build options

The `[build-options]` table specifies options that should be applied when building the package. You can provide build options in the `Ballerina.toml` instead of passing them to the `bal build` command.

Ballerina supports the following build options.

```toml
[build-options]
observabilityIncluded = true
offline = true
skipTests = true
testReport = true
codeCoverage = true
cloud = "k8s"
graalvm = true        # Enable the GraalVM image generation
graalvmBuildOptions = "--option1 --option2"        # Additional native-image options
```

### Modules

The `[[package.modules]]` array allows you to define metadata for individual modules. The following example demonstrates how to specify this information:

``` toml
[[package.modules]]
name = "winery.foo"
export = true
readme = "README.md"

[[package.modules]]
name = "winery.bar"
export = true
readme = "ModuleReference.md"
```

The optional export field indicates whether the module is public. Only public modules will be visible to the outside. By default, only the default module is public.

The optional readme field specifies the path to the module's documentation file in Markdown. If this field not provided, `README.md` is assumed to be the documentation file if it is available.

>**Note:** Metadata for the default module is defined under the `[package]` table. Therefore, the name field in the `[[package.modules]]` array cannot match the default module name.

### Dependencies

While the Ballerina compiler resolves dependencies automatically based on the import statements, the `[[dependency]]` array can be used to specify a dependency from the local repository or to specify the minimum required version of a dependency.

#### Specify a dependency from the local repository

The following example shows how a dependency from the local repository can be specified:

```toml
[[dependency]]
org = "ballerinax"
name = "mysql"
version = "1.5.0"
repository = "local"
```

This will resolve the specified dependency from the local repository. For more information on how dependency resolution with the local repository works, see [Manage Dependencies](/learn/manage-dependencies/#use-dependencies-from-the-local-repository).

#### Specify the minimum version for a dependency

The following example shows how the minimum version for a dependency can be specified:

```toml
[[dependency]]
org = "ballerinax"
name = "sql"
version = "1.6.0"
```

With this, the compiler considers `1.6.0` as the minimum required version when resolving `ballerinax/sql`. If there are higher versions available in the Ballerina repositories, then, the latest compatible version will be resolved. To learn more about updating versions, see [Manage Dependencies](/learn/manage-dependencies/#update-dependency-versions).

### Platform dependencies

When using the `bal build` command to compile a Ballerina package, the resulting output will either be an executable JAR file or a non-executable JAR file (library package) depending on whether the package contains an entry point. These archives created by the Ballerina compiler are self-contained, meaning that they include all necessary dependencies. It may also be necessary to package external JAR files with these archives.

When working with JAR files, it is considered a best practice to keep them organized within the package. This makes it easier to manage and maintain the dependencies. 

>**Note:** Additionally, it is important that Java libraries are considered platform-specific, and thereby, their location and usage should be specified in the `Ballerina.toml` file. This can be done by including a dependency on the specific JAR file as demonstrated below in the `Ballerina.toml` file. This helps the Ballerina compiler to include the relevant JAR files when creating the archive. 

There are two ways to include the JAR dependency.

**Use remote repositories**

The following example shows how a dependency from a public Maven repository can be specified.

```toml
[[platform.java11.dependency]]
# Group ID of the Maven dependency.
groupId = "<group-id>"
# Artifact ID of the Maven dependency.
artifactId = "<artifact-id>"
# Version of the Maven dependency.
version = "<version>"
```

When building the package, these specified Maven dependencies will be resolved and can be found in the `target/platform-libs` directory. To specify a Maven dependency in the `Ballerina.toml` file, you can use the following format.

It is also possible to use a custom repository such as a private Maven repository or Github Package repository for your dependencies by specifying it in the `Ballerina.toml` file.

```toml
[[platform.java11.repository]]
id = "<maven-repository-id>"
url = "<maven-repository-url>"
username = "<maven-repository-username>"
password = "<maven-repository-password>"
```

When working with JAR file dependencies, it is a best practice to attach them to the default root module of your package if your package has only the default root module. This makes it easy to manage and maintain the dependencies. However, if your package is a Ballerina library package, it is recommended that you specify the JAR file dependencies in each Ballerina module that depends on the JAR file.

By default, the `bal build` command will package all JAR files specified in the `Ballerina.toml` file along with the executable JAR file. This ensures that the executable JAR file includes all necessary dependencies making the package self-contained and easy to use.

**Provide the path of JAR file**

You may also store the JAR files anywhere in your file system and provide the path as shown below. 

```toml
[[platform.java11.dependency]]
# Group ID of the dependency.
groupId = "<group-id>"
# Artifact ID of the dependency.
artifactId = "<artifact-id>"
# Version of the dependency.
version = "<version>"
# Absolute or relative path of the JAR file.
path = "<path-to-jar-file-1>"
```

The Ballerina compiler will copy the specified JAR file from the provided path when creating the archive.

**Restrict usage to specific modules**

The following example shows how you can optionally restrict the visibility of a platform dependency to a selected set of modules.

```toml
[[platform.java11.dependency]]
# Absolute or relative path of the JAR file.
path = "<path-to-jar-file-1>"
# An optional comma-separated list of Ballerina module names (to restrict the usage of this JAR).
modules = ["<ballerina-module-1>"]
```

  It is considered a best practice to provide the names of the modules that use the JAVA library as a comma-separated list. This ensures that the JAR library is only used in the specified modules.

**Resolve multiple versions of the same JAR**

There can be use cases where two different Ballerina dependencies may use the same platform library. Two platform dependency entries having the same `groupId` and the `artifactId` is considered to be the same where the latest out of the two will be picked by the compiler for creating the executable JAR. 

The following example shows the recommended way for specifying a platform dependency which will help with version resolution.

```toml
[[platform.java11.dependency]]
# Absolute or relative path of the JAR file.
path = "<path-to-jar-file-1>"
# Optional details about the dependency (to handle conflicting JAR files).
groupId =  "<dependency-group-id>"
artifactId =  "<dependency-artifact-id>"
version =  "<dependency-version>"
```

With the above approach, for example, if you are using `commons-logging-1.2.jar` in your package but there is another package in the dependency graph that uses `commons-logging-1.1.1.jar`, the compiler will pick the `commons-logging-1.2.jar` since it is the latest version. A warning will be reported in addition as shown below.

```
WARNING [mypackage] detected conflicting jar files. 'commons-logging-1.1.1.jar' dependency of 'myorg/pkg2' conflicts with 'commons-logging-1.2.jar'  dependency of 'myorg/pkg1'. Picking 'commons-logging-1.2.jar' over 'commons-logging-1.1.1.jar'.
```

Note: Ignoring the `groupId` and `artifactId` will result in picking a random jar with the following warning reported by the compiler.
```
warning: Detected conflicting jar files:
        'commons-logging-1.1.1.jar' dependency of 'myorg/pkg1' conflict with 'commons-logging-1.2.jar' dependency of 'myorg/pkg2'
```

**Define the scope for a dependency**

By default, when the scope has not been explicitly specified for a platform dependency in the `Ballerina.toml`, it will be packaged into the final executable JAR file or the BALA file. Two scopes can be used to restrict this behavior.

***'testOnly' scope***

To restrict a certain platform dependency to be used only for testing, specify the scope as `testOnly`. This will add the platform dependency to the test runtime but will avoid packing it into the final executable JAR file.

***'provided' scope***

To restrict a certain platform dependency from being packed into the BALA file, specify the scope as `provided`. This will add the platform dependency to the final executable JAR file but not to the BALA file.

This scope is useful in cases where the provider's license restricts the redistribution of the platform library. By specifying the "provided" scope, you ensure the dependency is available during both compilation and execution, without being included in the BALA. This approach helps avoid any licensing complications associated with redistribution.

When incorporating such a BALA as a dependency in another project, remember to explicitly define the platform dependency in the `Ballerina.toml` file since it will not be bundled within the BALA file. Additionally, it is important to note that specifying the scope as 'provided' when providing platform dependencies for the bal build command is not supported.

The following example shows a platform dependency entry with the `scope`.

  ```toml
  [[platform.java11.dependency]]
  # Absolute or relative path of the JAR file.
  path = "<path-to-jar-file-1>"
  # Scope of the JAR file
  scope =  "<scope-of-the-jar-file>"
  ```

>**Note:** When the scope has been specified as `provided`, the values `groupId`, `artifactId`, and `version` will be considered mandatory fields for that dependency.

**Mark a Java dependency as GraalVM compatible**

A Java dependency can be marked as GraalVM compatible by passing the `graalvmCompatible = true` property as follows:

```toml
[[platform.java11.dependency]]
groupId = "<group-id>"
artifactId = "<artifact-id>"
version = "<version>"
graalvmCompatible = true
```

If all the Java dependencies used in the package are marked as GraalVM compatible, the package is considered GraalVM compatible. 


### Tools

You can specify code generation tools to integrate with the package build. These tools execute before the package build and generate code that is essential for the build process.

The following example shows how to specify a tool in the `Ballerina.toml` file.

```toml
[[tool.<command>]]
id = "<tool-id>"
filePath = "<schema-or-API-specification-file>"
targetModule = "<destination-module-to-generate-code>"
options.<option1> = "<value1>"
options.<option2> = "<value2>"
```

The tool command that you need to use should be specified after the `tool.` prefix in the table array header.

The mandatory `id` field specifies a unique identifier for the tool entry, as a tool can utilize multiple schemas/API specifications files. The `id` must consist of alphanumeric characters and underscores only, and must not begin or end with an underscore. Consecutive underscores are also not permitted.

The `filePath` field is mandatory, providing the path to the specification file that the tool uses to generate code.
 
The `targetModule` field specifies the module where the generated code should be placed. If this is not specified, it will default to the root module. This should be unique for each tool entry.
 
The `options` fields can be used to pass additional parameters to the tool.

If a tool provides multiple subcommands, you can specify them as follows.

```toml
[[tool.<command>.<subcommand1>]]
id = "<tool-id1>"
filePath = "<specification-file>"
targetModule = "<generated-code-destination-module>"
options.<option1> = "<value1>"
options.<option2> = "<value2>"

[[tool.<command>.<subcommand2>]]
id = "<tool-id2>"
filePath = "<specification-file>"
targetModule = "<generated-code-destination-module>"
options.<option1> = "<value1>"
```

## Platform Compatibility

The compatibility of a platform with specific runtimes can be specified in the `Ballerina.toml` file using specific parameters. Currently, the `graalvmCompatible` property is supported to indicate the compatibility of a package with GraalVM for Java platforms.

For packages using `java11` platform dependencies, it can be specified as follows.

  ```toml
[platform.java11]
graalvmCompatible = true
  ```

If the package does not use any Java dependencies or if only Java dependencies provided by the distribution are used, this property is automatically inferred to be `true`.

## The `Dependencies.toml` file

The [`Dependencies.toml`](/learn/manage-dependencies/#specify-dependency-versions) locks the versions of the dependencies to support repeatable builds.
This file is auto-generated and managed by the Ballerina CLI. It does not need user intervention.

## The `README.md` file

The `README.md` file provides a human-readable description of a package. This file is required for publishing a package to a repository. It is the first page you will see when you navigate to the package in <a href="https://central.ballerina.io/" target="_blank">Ballerina Central</a>.

This file is in markdown format. It will be auto-generated when you create a library package. For steps to create a library package, see [Create a Library Package](/learn/publish-packages-to-ballerina-central/#create-a-library-package)

## The `target/` directory

The `target/` directory contains artifacts generated by building a package.

## The `tests/` directory

This is a directory related to the default module. For detailed information, see [Module layout](/learn/package-references/#module-layout).

## The `resources/` directory

The `resources/` directory stores package resources such as images, default configs, etc.

## The `modules/` directory

This directory contains the other modules. The layout of this directory is explained in the [Module layout](/learn/package-references/#module-layout).

## Module layout

```
.
├── app.bal
├── utils.bal
├── tests/
│     ├── main_tests.bal
│     └── utils_tests.bal
└── resources/
      └── app.png
```

### Module directories

The root directory of the default module is the root of the package directory. The top-level `modules/` directory contains all the other modules. Each immediate subdirectory of the `modules/` directory becomes a Ballerina module. The subdirectory name becomes the module name. Therefore, the subdirectory name should be a valid Ballerina identifier.

Module names can only contain alphanumerics, underscores, and periods and the maximum length is 256 characters. For the modules belonging to the same package, the value of the first identifier is the package name.

```
<package-name>[.<module-directory-name>]
```

You can add other modules using the `bal add` command.

```
$ bal add util
```

### The `.bal` source files

The root of the module directory contains the source files of that module.
The package sources are the `.bal` files in the `root` directory, and `tests/` directory of the module. All other `.bal` files are treated as standalone Ballerina files.

### The `tests/` directory

The `tests/` directory contains unit tests for the module and tests the module in isolation. The module-level test cases have access to the symbols with module-level visibility.

## The `generated/` directory

This directory contains generated Ballerina code. The `.bal` files at the root of the generated directory become a part of the default module. Any direct subdirectory becomes a module in the package. The files will logically merge into the existing modules during compilation. Any files added to the `resources` directory within the `generated/` directory will be recognized as resources for the package.

<style> #tree-expand-all , #tree-collapse-all, .cTocElements {display:none;} .cGitButtonContainer {padding-left: 40px;} </style>

 
