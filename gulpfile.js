var elixir = require('laravel-elixir');

var gulp   = require('gulp');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
 * Bower Root
 */
var bower = 'resources/assets/bower/';

/*
 * Assets Root
 */
var root = 'resources/assets/';

/*
 * Utilities Directory
 */
var utils = root  + 'js/utils/';

/**
 * App Source Files
 */
var source = '/src/';
var models =  source  + 'models/';
var routers =  source  + 'routers/';
var views  =  source  + 'views/';

/*
 * Assets Output
 */
var css = 'public/assets/css/';
var js  = 'public/assets/js/';

/*
 *  Vendor output
 */
var bootstrap    = 'public/vendor/bootstrap/';
var fontawesome  = 'public/vendor/font-awesome/';
var underscore   = 'public/vendor/underscore/';
var ohsnap       = 'public/vendor/oh-snap/';
var sweetalert   = 'public/vendor/sweetalert/';
var fullcalendar = 'public/vendor/fullcalendar';
var typeahead    = 'public/vendor/typeahead/';
var handlebars   = 'public/vendor/handlebars/';
var magicsuggest = 'public/vendor/magicsuggest';
var marionette   = 'public/vendor/marionette';
var normalize    = 'public/vendor/normalize/';
var datetimepicker =  'public/vendor/datetimepicker/';

elixir(function(mix) {


    /**
     * Application Styles
     */
    mix.sass(['app.scss'], css);

    // Bootstrap
    mix.copy(bower + 'bootstrap/dist/css/bootstrap.min.css', bootstrap)
        .copy(bower + 'bootstrap/dist/css/bootstrap-theme.min.css', bootstrap)
        .copy(bower + 'bootstrap/dist/js/bootstrap.min.js', bootstrap)
        .copy(bower + 'bootstrap/fonts', 'public/vendor/fonts')
        // Underscore
        .copy(bower + 'underscore/underscore.js', underscore)
        // Sweetalert
        .copy(bower + 'sweetalert/dist/sweetalert.min.js', sweetalert)
        .copy(bower + 'sweetalert/dist/sweetalert.css', sweetalert)
        // Twitter Typeahead
        .copy(bower + 'typeahead.js/dist/typeahead.bundle.js', typeahead)
        // Handlebars
        .copy(bower + 'handlebars/handlebars.js', handlebars)
        // Magicsuggest
        .copy(bower + 'magicsuggest/magicsuggest-min.js', magicsuggest)
        .copy(bower + 'magicsuggest/magicsuggest-min.css', magicsuggest)
        // FontAwesome
        .copy(bower + 'font-awesome/css/font-awesome.min.css', fontawesome)
        .copy(bower + 'font-awesome/fonts', 'public/vendor/fonts')
        // Css Normalize
        .copy(bower + 'normalize-css/normalize.css', normalize)
        // Fullcalendar
        .copy(bower + 'fullcalendar/dist/fullcalendar.css', fullcalendar)
        .copy(bower + 'fullcalendar/dist/fullcalendar.js', fullcalendar)
        // Backbone Marionette
        .copy(bower + 'backbone.marionette/lib/backbone.marionette.js', marionette)
        // Datetime picker
        .copy(bower + 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', datetimepicker)
        .copy(bower + 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', datetimepicker)
        // Application Constants
        .copy(root + 'js/constants.js', js);

    // dashboard js source.
    mix.scripts([
        utils+'utils.js',
        models,
        views,
        routers,
        source+'app.js'] , js+'app.js');

    // Versioning
    mix.version(['assets/css/app.css', 'assets/js/app.js']);

});