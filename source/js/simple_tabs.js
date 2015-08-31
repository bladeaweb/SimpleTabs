(function($) {
    $.fn.SimpleTabs = function(options) {
        options = $.extend({
            start: 1,
            vertical: false
        }, options);

        var start_tab = options.start;
        var vertical = options.vertical;
        var element = this;
        var i;

        $(element).addClass('simple_tabs');

        if(vertical == true) {
            $(element).addClass('simple_tabs_vertical');
        }else{
            $(element).addClass('simple_tabs_horizontal');
        }

        $(element).children('ul').addClass('tabs_buttons');

        $(element).children('ul').children('li').each(function(i){
            i++;
            $(this).addClass('tab_button_wrapper');
            $(this).children('a').attr('href', '#' + $(element).attr("id") + '-tab-' + i);
            $(this).children('a').addClass('tab_button');
        });
        $(element).children('.tabs_contents').children('div').each(function(i){
            i++;
            $(this).attr('id', '' + $(element).attr("id") + '-tab-' + i);
            $(this).addClass('tab_content');
        });

        $(element).children('.tabs_buttons').children('.tab_button_wrapper').children('.tab_button').click(function(e){
            if(!$(this).parent('li').hasClass('active')){
                simple_tab_click_item(e);
            }
            return false;
        });

        $(element).children('.tabs_buttons').children('.tab_button_wrapper:nth-child(' + start_tab + ')').children('.tab_button').click();

        function simple_tab_click_item(e){
            $($(e)[0].currentTarget).parent().parent().children('.tab_button_wrapper').each(function(){
                $(this).removeClass('active');
            });
            $($(e)[0].currentTarget).parent('.tab_button_wrapper').addClass('active');
            $($(e)[0].currentTarget).parent().parent().parent().children('.tabs_contents').children('.tab_content').each(function(){
                $(this).removeClass('active');
            });
            $(''+$(e)[0].currentTarget.hash+'').addClass('active');
            return false;
        }
    }
})(jQuery);