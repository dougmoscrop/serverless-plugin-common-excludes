'use strict';

module.exports = class CommonExcludes {

  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'after:deploy:function:initialize': this.addExcludes.bind(this),
      'after:deploy:initialize': this.addExcludes.bind(this)
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
        '.npmignore',
        '*circle.yml',
        '*travis.yml',
        '*.md',
        // common project directories
        'coverage/**',
        '.nyc_output/**',
        'docs/**',
        'test/**',
        // aws-sdk is included in Lambda
        'node_modules/**/aws-sdk',
        // common things that node_modules fail to .npmignore
        'node_modules/**/*.md',
        'node_modules/**/*.markdown',
        'node_modules/**/*Makefile',
        'node_modules/**/Dockerfile',
        'node_modules/**/*.txt',
        'node_modules/**/*.yml',
        'node_modules/**/*.html',
        'node_modules/**/test/**',
        'node_modules/**/docs/**',
        'node_modules/**/examples/**',
        'node_modules/**/bin/**',
        'node_modules/**/bower.json',
        'node_modules/**/karma.conf.js',
        'node_modules/**/Gruntfile.js',
        // yes, these are real
        'node_modules/**/*.gif',
        'node_modules/**/*.png',
        'node_modules/**/*.jpg',
        'node_modules/**/*.jpeg'
      ])
    ));
  }
};
