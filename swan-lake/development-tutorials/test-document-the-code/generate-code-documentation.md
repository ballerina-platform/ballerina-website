---
layout: ballerina-generating-doc-left-nav-pages-swanlake
title: Generate code documentation
description: Learn how to write unstructured documents with a bit of structure to enable HTML content generation as API documentation.
keywords: ballerina, programming language, api documentation, api docs
permalink: /learn/generate-code-documentation/
active: generate-code-documentation
intro: Ballerina has a built-in Ballerina Flavored Markdown (BFM) documentation framework, which allows you to write unstructured documents with a bit of structure to generate HTML content as API documentation.
---

## Generate documentation for modules

Developers can write the documentation in line with the Ballerina source code using the lightweight <a href="https://daringfireball.net/projects/markdown/syntax" target="_blank">markdown</a> markup language.
They can document special constructs such as parameters, return values, fields, etc., within the code using documentation attributes.
Once the code is documented, developers can generate a basic HTML version of their Ballerina modules using the `bal doc` command. Developers are encouraged to have their custom themes and styles, to have a standard presentation of their Ballerina documentation.

Ballerina documentation design and usage is aligned with the package and module semantics of Ballerina. You can generate documentation for modules using the `bal doc` command.

* Ballerina programmers can place the documentation in line with the source code using the documentation syntax.
* Ballerina type definitions, global variables, annotations, listeners, etc., can be documented using the documentation syntax.
* Fields, parameters, return values, etc., can be marked using documentation attributes.
* Ballerina uses a React app to render the documentation, and the data required is stored as a JSON in the `api-docs.js` file. The React app source code can be found in the <a href="https://github.com/ballerina-platform/ballerina-dev-tools/tree/main/docerina-ui" target="_blank">`ballerina-dev-tools`</a> GitHub repo. Developers are welcome to customize and try out themes and styles in the React app.

## Write Ballerina documentation

Ballerina Flavored Markdown documentation is a first-class syntax in the Ballerina language. The ``#`` at the beginning of a line denotes a line of documentation. 
If necessary, you can have multiple lines of documentation, which you can group together.

```ballerina
# <documentation line 1>
# <documentation line 2>
# ...
```

When writing the documentation for Ballerina APIs, you can use the standard markdown documentation syntax as shown below.

```ballerina
# Provides the HTTP actions for interacting with an HTTP server. Apart from the standard 
# HTTP methods, `forward()` and `execute()` functions are provided.
# ...
```

The supported structure of documentation syntax for functions is as follows:

```ballerina
# <description_line_1>
# <description_line_2>
# ...
# + <parameter_name> - <description_line_1>
#                      <description_line_2>
# ...
# + <parameter_name> - <description_line_1>
#                      <description_line_2>
# ...
# + return - <return_parameter_description_line_1>
#            <return_parameter_description_line_2>
```

>**Tip:** Always add a period (**.**) at the end of a function description. However, for the parameter and return type descriptions, omit the period if you have only one sentence. If there are multiple sentences, add the period at the end of each sentence. For example,

```ballerina
# Description of the function.
#
# + i - One sentence only
# + s - Sentence one. Sentence two.
# + return - Return description
public function foo(int i, string s) returns boolean {
    return true;
}
```

Members of record and object types can be documented at member-level.

```ballerina
# Description of the record.
type Record record {|
    # Description of field `f1`
    string f1;    
    # Description of field `f2`
    int f2;
|};
```

**Sample usage**

```ballerina
# Submits an HTTP request to a service with the specified HTTP verb.
# The `HttpClient->submit()` function does not give out an `http:Response` as the result.
# Rather, it returns an `http:HttpFuture`, which can be used to do further 
# interactions with the endpoint.
#
# Example:
# ```ballerina
# HttpFuture future = myMsg.submit("GET", "/test", req);
# ```
#
# + httpVerb - The HTTP verb value
# + path - The resource path
# + message - An HTTP outbound request or any allowed payload
# + return - An `http:HttpFuture` that represents an asynchronous service invocation 
#            or an `http:ClientError` if the submission fails
remote isolated function submit(string httpVerb, string path, RequestMessage message) returns HttpFuture|ClientError {
    // function body
}
```

## Document a module

A Ballerina module can have a `README.md` file, which describes the module and its usage.

A typical package structure of a Ballerina package is like this:

```
/
  Ballerina.toml       # Configuration, which defines the package intent.
  main.bal
  README.md            # Contains descriptive metadata of the default module to be displayed in
                       # API documentation. This is optional.
    modules
      module1/             
        README.md      # Contains descriptive metadata to be displayed in 
                       # Ballerina Central. This is optional.
        *.bal
        [tests/]       # Module-specific unit and integration tests.
        [resources/]   # Module-specific resources.

      module2/
        README.md
        *.bal
        [tests/]
        [resources/]

  [resources/]         # Resources included in every module in the package.

  target/              # Compiled executables and other artifacts end up here.
```

The `bal doc` command will read the `README.md` files and prepend them to the generated HTML file.

The documentation file can be changed by explicitly specifying the path to the documentation file in the `Ballerina.toml`, under the `[[package.modules]]` array.

```toml
[[package.modules]]
name = "winery.bar"
export = true
readme = "docs/ModuleReference.md"
```

Check the <a href="https://lib.ballerina.io/ballerina/http/latest" target="_blank">`http` module API Documentation</a> for sample HTML that has `README.md` content at the top followed by the other module constructs.

## Generate Ballerina documentation

Ballerina provides a `doc` command, which can be executed against a given Ballerina package. This command will result in generating the Ballerina documentation as HTML files for all the modules in the package.

First, let's create a new Ballerina package:

```
$ bal new math
Created new package 'math' at math
$ tree
└── math
    ├── Ballerina.toml
    └── main.bal

1 directory, 2 files
```

Now, let's add a function to the `math` module to be documented. Copy and paste the following code into the `math/main.bal` file.

```ballerina
# Calculates the value of the 'a' raised to the power of 'b'.
# ```ballerina
# float aPowerB = math:pow(3.2, 2.4);
# ```
# 
# + a - Base value
# + b - Exponential value
# + return - Calculated exponential value
public isolated function pow(float a, float b) returns float {
    return 0;
}
```

Now, navigate to the `math` directory, and run the `bal doc` command to generate the documentation of the package.
```
$ cd math
$ bal doc
```
Output:
```
Compiling source
	user/math:0.1.0
Generating API Documentation
Saved to: apidocs
```

`target/apidocs/user/math/0.1.0` folder would contain the following;
```
$ ls target/apidocs/user/math/0.1.0/
bundle.js  index.html  ...
```

* `index.html`  - the entry point for documentation

For other options, run `bal doc --help`.
