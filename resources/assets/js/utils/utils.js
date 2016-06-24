/**
 * Controls for loading gif.
 */
var Loading = (function(selector, fadeOut){

    // Provide default values if none given.
    var fadeOut = fadeOut || 100;
    var selector = selector || ".selector";

    /**
     * Public mthod.
     */
    return {
        show: function() {
            $(selector).show();
        },

        hide: function() {

            $(selector).fadeOut(fadeOut);
        }
    }

}());


/**
 * Use to display server errors, typically 500 response codes,
 * But can be used for anything else.
 */
var ServerError = (function(response) {

    var defaultMessage = "There semes to be a problem with the server.  "+
            "Please try again or contact support if this message persists"

    var message = response.error_message || defaultMessage;

    var title = response.error_title || "Whoops!";

    swal({
        title: title,
        text: message,
        html:true,
        type: "error",
        confirmButtonColor: CONSTANTS.colors.error,
        confirmButtonText: "Ok"
    });

});

/**
 * Handle bars compile wrapper,
 * used for convenience.
 */
var HandleBarsCompile = (function(templateId, context){

    var context = context || {};

    var source = $(templateId).html();

    var template = Handlebars.compile(source);

    return template(context);
});

/**
 * This functions grabs all input fields from the provided form with id.
 */
var FormInputGet = (function(formId) {

    return $(id).map(function() {

        return {
            name: this.name,
            value: this.value
        }

    });

});

/**
 * Serialize given form.
 */
var ObjectSerialize = (function(identifier) {

    var elements = $(identifier).serializeArray();

    return _(elements).reduce(function(element, field)
    {
        element[field.name] = field.value;
        return element

    }, {});

});

/**
 * Show swal success alert.
 */
SuccessMessage = (function(title, message, callback){
    return swal({title: title,
            text: message,
            html: true,
            type: "success",
            confirmButtonColor: CONSTANTS.colors.success,
            confirmButtonText: "Ok"},
        function(){
            if(typeof(callback)=='function')
            {
                callback();
            }
        });
});

/**
 * Show swal info alert.
 */
InfoMessage = (function(title, message, callback){
    return swal({title: title,
            text: message,
            html: true,
            type: "info",
            confirmButtonColor: CONSTANTS.colors.info,
            confirmButtonText: "Ok"},
        function(){
            if(typeof(callback)=='function')
            {
                callback();
            }
        });
});


/**
 * Show swal warning alert.
 */
WarningMessage = (function(title, message, callback){
    return swal({title: title,
            text: message,
            html: true,
            type: "warning",
            confirmButtonColor: CONSTANTS.colors.warning,
            confirmButtonText: "Ok"},
        function(){
            if(typeof(callback)=='function')
            {
                callback();
            }
        });
});

/**
 * Show swal error message.
 */
ErrorMessage = (function(title, message, callback){
    var message = message || 'A server error has occurred, please try again or contact application support';
    return swal({title: title,
            text: message,
            html: true,
            type: "error",
            confirmButtonColor: CONSTANTS.colors.error,
            confirmButtonText: "Ok"},
        function(){
            if(typeof(callback)=='function')
            {
                callback();
            }
        });
});

/**
 * Show swal confirm message for deleting resources.
 */
ConfirmDelete = (function(title, message, options, callback){

    var title = title || "Are you sure?";
    var text = message || "You will not be able to undo this action!";
    return swal({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function(){

        $.when(callback()).then(function() {
            swal(options.uppercase+" Deleted!", "The "+options.lowercase+" has been deleted.", "success");
        });

    });
});

/**
 * Assign validation errors returned with ajax response to corresponding form field.
 */
var AssignErrorToField = (function (error, key) {

    var field = $('[name='+key+']').length == 0 ? $("#"+key) : $('[name='+key+']');
    $(field).parents('.form-group').find('.validation-error').html(error);

});

/**
 * Loops through validation errors and calls function that renders them.
 */
var ShowErrors = (function (response) {

    $('.validation-error').text('');

    var json = response.responseJSON;
    var text = JSON.parse(response.responseText);

    var errors = typeof json !== 'undefined' ? json : text;

    _.each(errors, function(num, key) {
        console.log(num);
        AssignErrorToField(num, key);
    });

});



