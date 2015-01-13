(function($) {

    $.fn.breakpoint = function( size, options ) {
        var output = false;
        // Establish our default settings
        var settings = $.extend({
            sizes: ['xs','sm','md','lg'],
        }, options);
        
        if($.inArray(size,settings.sizes)){
            var item = $('.breakpoint .visible-'+size);
            if(item.length === 0){
                $('body').append('<div class="breakpoint visible-'+size+'"></div>');
            }
            output = item.is(':visible');
        }else{
            $.error('Invalid size');
        }
        return output;
    }

}(jQuery));