/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'todoapp-firebase',
    environment: environment,
    firebase: {
      apiKey: "AIzaSyB8tqWfI8e2PNQrqg8Ffi15yH5FKIgSeAE",
      authDomain: "todoapp-de283.firebaseapp.com",
      databaseURL: "https://todoapp-de283.firebaseio.com",
      projectId: "todoapp-de283",
      storageBucket: "todoapp-de283.appspot.com",
      messagingSenderId: "426742950011"
    },
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'script-src': '\'self\' \'unsafe-eval\' apis.google.com',
      'style-src': '\'self\' \'unsafe-inline\' fonts.googleapis.com',
      'font-src': '\'self\' fonts.gstatic.com',
      'frame-src': '\'self\' https://*.firebaseapp.com',
      'img-src': '\'self\' *.gravatar.com s3.amazonaws.com',
      'connect-src': '\'self\' wss://*.firebaseio.com https://*.googleapis.com'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
