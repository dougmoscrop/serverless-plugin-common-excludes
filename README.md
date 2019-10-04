# serverless-plugin-common-excludes

This plugin adds some common unnecessary items (such as docs, test code, unused configuration files, etc.) to the `package: exclude` configuration of your Serverless project to make it smaller.

Check out which files are excluded [here](https://github.com/dougmoscrop/serverless-plugin-common-excludes/blob/master/common-excludes.js).

[serverless-plugin-include-dependencies](https://github.com/dougmoscrop/serverless-plugin-include-dependencies) works with this plugin.

## Installation

Install the plugin:

```bash
npm install serverless-plugin-common-excludes --save-dev
```

Include the plugin in your `serverless.yml`:

```yaml
plugins:
  - serverless-plugin-common-excludes
```

