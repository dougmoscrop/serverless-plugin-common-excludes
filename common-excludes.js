'use strict';

module.exports = class CommonExcludes {

  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'after:deploy:function:initialize': this.addExcludes.bind(this),
      'after:package:initialize': this.addExcludes.bind(this)
    };
  }

  addExcludes() {
    const service = this.serverless.service;

    service.package = service.package || {};

    const exclude = service.package.exclude || [];

    service.package.exclude = Array.from(new Set(
      exclude.concat([
        // common project files
        '.gitignore',
        '.gitconfig',
        '.editorconfig',
        '.eslintignore',
        '.eslintrc',
        '.npmrc',
        '.nycrc',
        '.npmignore',
        '*coveralls.yml',
        '.circleci/**',
        '*circle.yml',
        '*travis.yml',
        '.gitlab-ci.yml',
        '*.md',
        '*.apib',
        '.vscode/**',
        'package-lock.json',
        '.npm-upgrade.json',
        'sonar-project.properties',
        'rollup.config.*',
        'yarn.lock',
        // common project directories
        'coverage/**',
        '.nyc_output/**',
        'docs/**',
        'test/**',
        'tests/**',
        'CODEOWNERS',
        // aws-sdk is included in Lambda
        'node_modules/**/aws-sdk/**',
        // common things that node_modules fail to .npmignore
        'node_modules/**/*.md',
        'node_modules/**/*.flow',
        'node_modules/**/*.patch',
        'node_modules/**/*.conf',
        'node_modules/**/*.markdown',
        'node_modules/**/*.coffee',
        'node_modules/**/jsdoc_conf.json',
        'node_modules/**/*Makefile',
        'node_modules/**/Dockerfile',
        'node_modules/**/*.txt',
        'node_modules/**/*.yml',
        'node_modules/**/*.xml',
        'node_modules/**/*.html',
        'node_modules/**/test/**',
        'node_modules/**/tests/**',
        'node_modules/**/docs/**',
        'node_modules/**/examples/**',
        'node_modules/**/coverage/**',
        'node_modules/**/.nyc_output/**',
        'node_modules/**/bin/**',
        'node_modules/**/bower.json',
        'node_modules/**/karma.conf.js',
        'node_modules/**/Gruntfile.js',
        'node_modules/**/rollup.config.*',		
        'node_modules/**/yarn.lock',
        'node_modules/**/sonar-project.properties',	
        'node_modules/**/package-lock.json',
        'node_modules/**/*.d.ts',
        'node_modules/**/*.map',
        'node_modules/**/tsconfig.json',
        'node_modules/**/AUTHORS',
        'node_modules/**/CODEOWNERS',
        'node_modules/**/OWNERS',
        'node_modules/**/license*',
        'node_modules/**/licence*',
        'node_modules/**/LICENSE*',
        'node_modules/**/LICENCE*',
        'node_modules/**/License*',
        'node_modules/**/Licence*',
        'node_modules/**/*.iml',
        'node_module/**/*.bash_completion.in',
        // yes, these are real
        'node_modules/**/*.gif',
        'node_modules/**/*.png',
        'node_modules/**/*.jpg',
        'node_modules/**/*.jpeg',
        // module-specific odd things
        'node_modules/**/winston/scratch/**',
        'node_modules/**/sshpk/man/**',
        'node_modules/**/bluebird/js/browser/**',
        'node_modules/**/date-fns/docs.json',
        'node_modules/**/aws-xray-sdk-core/doc-src/**',
      ])
    ));
  }
};
