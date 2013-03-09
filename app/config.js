// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["../vendor/jam/require.config", "main"],

  paths: {
    underscore_string:  '../vendor/js/libs/underscore.string'
  },

  shim: {
    underscore_string: {
      deps: ['underscore'],
      exports: '_s'
    }
  }

});
