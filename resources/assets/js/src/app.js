/**
 * Application declaration.
 */
var Application = Marionette.Application.extend({

    initialize: function()
    {
        console.log('Application Startup');
    }

});

/**
 * Application Instance.
 *
 * Refer to http://marionettejs.com/docs to see available methods
 * of the marionette application object.
 *
 */
var App = new Application();

/**
 * Application Options.
 *
 * You can pass any configuration paramters need for the application to run
 * using an abject like the one bellow.
 *
 */
options = {
    "container": "#someId",
    "version": "1.0.0",
    "baseUrl": "",
    "apiUrl": ""
}

/**
 * Start me up !!
 */
App.start(options);





