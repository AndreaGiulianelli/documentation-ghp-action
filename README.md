# Documentation Github Pages Action


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=plastic)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/github/v/release/smartoperatingblock/documentation-ghp-action?style=plastic)

A composite **Github Action** to generate *code*, *OpenAPI* and *AsyncAPI* documentation and to deploy it on Github Pages.

## Setup
Choose the types of documentation you want to generate by putting true on this input parameters:
- `should-generate-code-documentation`
- `should-generate-openapi-documentaion`
- `should-generate-asyncapi-documentaion`

For every selected type specify the command, input file and destination folder or use the default values:
- `code-documentation-generation-command`    default *'./gradlew dokkaHtml'*
- `code-documentation-dst-folder`    default *'build/dokka/html'*
- `code-documentation-site-folder` default *'documentation/code-doc'*
- `openapi-documentation-input-file`    default *'docs/openapi/openapi.yml'*
- `openapi-documentation-dst-folder`    default *'documentation/openapi-doc/'*
- `asyncapi-documentation-input-file`    default *'docs/asyncapi/asyncapi.yml'*
- `asyncapi-documentation-dst-folder`    default *''documentation/asyncapi-doc/'*

Finally, provide the GITHUB_TOKEN to allow the action to push on *gh-pages* branch:
- `github-token`
  
## Example

An example of how to use the action with all types of documentations and inputs:
```yaml
jobs:
  documentation:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - uses: SmartOperatingBlock/documentation-ghp-action@1.0.0
        with:
          should-generate-code-documentation: true
          code-documentation-generation-command: ./gradlew dokkaHtml
          code-documentation-dst-folder: 'build/dokka/html'
          code-documentation-site-folder: 'documentation/code-doc'
          should-generate-openapi-documentation: true
          openapi-documentation-input-file: 'docs/openapi/openapi.yml'
          openapi-documentation-dst-folder: 'documentation/openapi-doc'
          should-generate-asyncapi-documentation: true
          asyncapi-documentation-input-file: 'docs/asyncapi/asyncapi.yml'
          asyncapi-documentation-dst-folder: 'documentation/asyncapi-doc'
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
