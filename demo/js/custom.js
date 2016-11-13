(function($) {
    $(document).ready(function () {
        $('.simple_horizontal_tabs').SimpleTabs();
        $('#simple_vertical_tabs').SimpleTabs({start: 2, vertical: true});
    });
})(jQuery);