# Statsig Node ESM Bug Demo

This is an example project demonstrating an issue I'm having with the `statsig-node` package in an ESM project.

## Example 1

`npm run example1`

This example uses the default import syntax, which results in a lint error but correct runtime behavior.

## Example 2

`npm run example2`

This example uses the named import syntax, which results in a runtime error.