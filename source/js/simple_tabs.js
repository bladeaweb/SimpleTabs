(function($) {
    $.fn.SimpleTabs = function(options) {
        options = $.extend({
            start: 1,
            vertical: false,
            mainClass: "simple_tabs",
            verticalClass: "simple_tabs_vertical",
            horizontalClass: "simple_tabs_horizontal",
            tabIdSuffix: "-tab-",
            tabActiveClass: "active",
            buttons: {
                containerElement: "ul",
                containerClass: "tabs_buttons",
                itemElement: "li",
                itemClass: "tab_button_wrapper",
                linkElement: "a",
                linkClass: "tab_button"
            },
            content: {
                containerClass: "tabs_contents",
                itemElement: "div",
                itemClass: "tab_content"
            }
        }, options);

        var start_tab = options.start,
            vertical = options.vertical,
            tabIdSuffix = options.tabIdSuffix,
            tabActiveClass = options.tabActiveClass,
            // Main classes
            mainClass = options.mainClass,
            verticalClass = options.verticalClass,
            horizontalClass = options.horizontalClass,
            // Buttons variables
            tabButtonsContainerElement = options.buttons.containerElement,
            tabButtonsContainerClass = options.buttons.containerClass,
            tabButtonsItemElement = options.buttons.itemElement,
            tabButtonsItemClass = options.buttons.itemClass,
            tabButtonsLinkElement = options.buttons.linkElement,
            tabButtonsLinkClass = options.buttons.linkClass,
            // Content variables
            tabContentContainerClass = options.content.containerClass,
            tabContentItemElement = options.content.itemElement,
            tabContentItemClass = options.content.itemClass,
            // Start work
            element = this;

        function init() {

            if (element[0]) {

                $(element).addClass(mainClass);

                if (!element.attr("id")) {
                    for (var i = 0; i < element.length; i++) {
                        $(element[i]).attr("id", mainClass + '-' + parseInt(i + 1));
                    }
                }

                if (vertical) {
                    element.addClass(verticalClass);
                } else {
                    element.addClass(horizontalClass);
                }

                for (var i = 0; i < element.length; i++) {
                    var buttonsContainer = $(element[i]).find(tabButtonsContainerElement);
                    $(buttonsContainer).addClass(tabButtonsContainerClass);
                    var buttonsItem = $(buttonsContainer).find(tabButtonsItemElement);
                    for (var j = 0; j <= buttonsItem.length; j++) {
                        $(buttonsItem[j])
                          .addClass(tabButtonsItemClass)
                          .children(tabButtonsLinkElement)
                          .attr('href', '#' + $(element[i]).attr("id") + tabIdSuffix + parseInt(j + 1))
                          .addClass(tabButtonsLinkClass);
                    }
                    var contentContainer = $(element[i]).find("." + tabContentContainerClass),
                        contentContainerItem = contentContainer.children(tabContentItemElement);
                    for (var j = 0; j <= contentContainerItem.length; j++) {
                        $(contentContainerItem[j]).attr('id', '' + $(element[i])
                            .attr("id") + tabIdSuffix + parseInt(j + 1))
                            .addClass(tabContentItemClass)
                    }
                    $(buttonsItem).find('.' + tabButtonsLinkClass).click(function () {
                        click($(this), $(this).closest('.' + mainClass));
                        return false
                    });
                    if (start_tab > 0) {
                        click($(buttonsItem[start_tab - 1]).find('.' + tabButtonsLinkClass), $(element[i]));
                    }
                }
            }
        }

        function hide(e, tabs) {
            if( e[0] ) {
                $(tabs)
                  .children('.'+tabButtonsContainerClass)
                  .find('.'+tabButtonsItemClass)
                  .removeClass(tabActiveClass);
                $(tabs)
                  .children('.'+tabContentContainerClass)
                  .children('.'+tabContentItemClass)
                  .removeClass(tabActiveClass);
            }
        }

        function show(e) {
            if( e[0] ) {
                $(e[0].parentElement).addClass(tabActiveClass);
                $(e[0].hash).addClass(tabActiveClass);
            }
        }

        function click(e, tabs) {
            hide(e, tabs);
            show(e)
        }

        init();
    }
})(jQuery);