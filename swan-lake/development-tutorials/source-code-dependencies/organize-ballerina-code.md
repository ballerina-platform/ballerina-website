---
layout: ballerina-organizing-code-left-nav-pages-swanlake
title: Organize Ballerina code
description: The sections below include information about packages and how you can manage the growth of your source code.
keywords: ballerina, programming language, ballerina packages, dependencies, importing modules
permalink: /learn/organize-ballerina-code/
active: organize-ballerina-code
intro: The sections below include information about packages and how you can manage the growth of your source code.
---

## Package structure

Writing code in an organized manner from the beginning of the project is important for the lifecycle of the project and its maintainability in the long run. Organized code will make it easy to extend and improve your project over time. Ballerina project structure makes it easy to write clean code by eliminating repetitions, writing reusable code, adding new features without changing the existing code, etc. To achieve this, Ballerina has the concept of packages and modules. 

Ballerina code is organized in a single shareable unit called a package.

A package is a collection of modules, and a module is a collection of Ballerina source files and test files. A package should contain at least one module, which becomes the default module. Each module has its own directory, which organizes source files and test files. A package can include resources in a `resources` directory located at the package source root, and test-specific resources in a `resources` directory within the `tests` directory at the package source root.

It is common in small projects to have only one (default) module in a package. As a result, the default module’s content is placed directly in the root of the package directory.

## Create your first Ballerina package

The `bal new` command below creates a package with the default module. 

```
$ bal new hello_world
```

This creates a new Ballerina package  in the default module with the `Ballerina.toml` file, which identifies a directory as a package and a sample source file (i.e., `main.bal`) with a main function.

The `bal new` command generates the following file structure.

```
cd hello_world
tree .
.
├── Ballerina.toml
└── main.bal
    
0 directories, 2 files
```

>**Info:** You may also create a service or a library package instead of the main function as explained in the sections below. 

## Create a Ballerina service package

```
$ bal new -t service hello_service
```

This creates a Ballerina source containing a service declaration with Ballerina tests to test the service. It creates the following file structure with the service template.  

```
cd hello_service
.
├── Ballerina.toml
├── service.bal
└── tests
    └── service_test.bal

1 directory, 3 files
```

## Create a library package

```
$ bal new -t lib hello_lib
```

This creates a Ballerina source file containing a function that prints `Hello, world!` along with a test file to test the function. Additionally, it creates the `README.md` file, which is required to [publish a package to Ballerina Central](/learn/publish-packages-to-ballerina-central).

```

├── Ballerina.toml
├── hello_lib.bal
├── README.md
└── tests
    └── lib_test.bal
```

## The default module

When a package is created with the `bal new` command, the `Ballerina.toml` and the `main.bal` files are created. 

The `main.bal` file is a Ballerina source file, which belongs to the default module. 
The root directory of the default module is the root directory of the package as well. 
Therefore, the package root directory contains files that belong to the package as well as the default module.

You can add more source files at the package root, and all the top-level symbols (i.e., functions, variables, etc.) defined in one file will also be visible to other files as they share the same namespace.
This namespace is called the default module of the package. The package name, which is specified in the `Ballerina.toml` file is also used to refer to the default module.

## Non-default modules

As projects grow in complexity, the need arises to organize code better. 
This could be because you want to separate the functionalities of the package and/or to add boundaries to the visibility of certain functionalities. 
Therefore, Ballerina allows subdividing the code into multiple modules as well.

You can add more modules to the package using the `bal add` command:

```
$ cd hello_world
$ bal add util
```

This will create the `modules` directory in the package root. The `modules/util` directory is the root of the `hello_world.util` module. 
The package structure after adding a non-default module will have the directory structure below.

```
.
├── Ballerina.toml
├── main.bal
└── modules
    └── util
        ├── tests
        │   └── lib_test.bal
        └── util.bal

4 directories, 5 files
```

## Import a module from the same package 

You can access any public symbol from another module of the package by importing the particular module using an import declaration. 

The import declaration syntax is as follows.

```ballerina
import module_name [as import_prefix];
```

In the above syntax:
* the `import_prefix` has to be a valid Ballerina identifier and the `import_prefix` is used to refer to public symbols in the declared module.
* the `import_prefix` is optional. If it is not available, the last part of the module name can be used.

In a package, which has the default module containing the `main.bal` file and a non-default module named `hello-world.util`, you can add a public function in the `hello_world.util` module and use this function in the `main.bal` file in the default module.

```ballerina
import hello_world.util;

String formattedMsg = util:properCaseMessage("hello world!");
```

Since the `import-prefix` is not given, the module name `util` is used to refer to the symbols in the `hello_world.util` module. 

## Package references

For information on the structure of a package directory, see [Package references](/learn/package-references/).
