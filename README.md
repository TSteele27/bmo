# BMO

## Overview

bmo is a collection of packages aimed at supercharging a developers workflow.
At its core it is an application framework paired with an extensible CLI
that allows developers to quickly modularize and customize their environment for their needs.

# Getting Started

To get started ensure that you have node.js >= 10.16 installed.

Using your favorite package manager globally install the bmo cli

```
yarn global add @b-mo/cli
```

```
npm install -g @b-mo/cli
```


From there you can install any of the bmo extensions to add new features to the cli.

# Terminology

This is a list of commonly used terms throughout the docs and what they mean in the context of bmo

- Dependencies - This refers to the bundle of modules available for your application to use through the dependency injector
- Modules - Packages or files that are put into Dependencies and run through bmo's dependency injection
- Manifest - The output of bmos dependency injector. It is an object with a configuration value and all the instantiated modules.

# Next Steps
Dig deeper into an individual tool or extension and read the docs!

- [cli](/packages/cli/)
- [bundle](/packages/bundle/)
- [config](/packages/config/)
- [es6Require](/packages/es6Require/)
- [httpServer](/packages/httpServer/)
- [injector](/packages/injector/)
- [mocker](/packages/mocker/)

OR

Checkout the [Recipes](/recipes/) and get started quick!

# Contributing

We are always accepting PRs, feature requests and bug reports.
If you want to contribute open an issue on our [github](https://github.com/libertymutual/bmo)
explaining the feature or bug and we can start the conversation on how best to address it.
Any code contributions should have accompanying tests and follow the core principles of extendability, modularity, and developer empowerment.
For more detailed information on how to contribute check [here](/contributing)
