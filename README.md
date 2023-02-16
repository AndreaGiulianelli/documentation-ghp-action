# Documentation Github Pages Action

A composite Github Action to generate code, OpenAPI and AsyncAPI documentation and to deploy it on Github Pages.

## Setup
Choose the types of documentation you want to generate by putting true on this input parameters:
- `should-generate-code-documentaion`
- `should-generate-openapi-documentaion`
- `should-generate-asyncapi-documentaion`

For every selected type specify the command, input file and destination folder or use the default values:
- `code-documentation-generation-command`    default *'./gradlew dokkaHtml'*
- `code-documentation-dst-folder`    default *'build/code-doc/'*
- `openapi-documentation-input-file`    default *'docs/openapi/openapi.yml'*
- `openapi-documentation-dst-folder`    default *'build/openapi-doc/'*
- `asyncapi-documentation-input-file`    default *'docs/asyncapi/asyncapi.yml'*
- `asyncapi-documentation-dst-folder`    default *'build/asyncapi-doc'/*

## Example

An example of action usage with all types of documentations
```yaml
```
