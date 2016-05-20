/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    storeConfigInMeta: false,
    fingerprint: {
      enabled: false
    },
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },
    babel: {
      optional: ['es6.spec.symbols'],
      includePolyfill: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/oval.svg');
  
  // Bourbon and Foundation 6
  app.import('bower_components/bourbon/app/assets/stylesheets/_bourbon.scss');
  app.import({
    development: 'bower_components/foundation-sites/scss/foundation.scss',
    test: 'bower_components/foundation-sites/scss/foundation.scss',
    production: ''
  });
  app.import({
    development: 'bower_components/foundation-sites/scss/util/_util.scss',
    test: 'bower_components/foundation-sites/scss/util/_util.scss',
    production: '',
  });
  app.import({
    development: 'bower_components/foundation-sites/dist/foundation.js',
    test: 'bower_components/foundation-sites/dist/foundation.js',
    production: ''
  });

  return app.toTree();
};
