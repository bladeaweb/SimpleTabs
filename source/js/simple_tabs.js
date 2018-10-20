(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.SimpleTabs = function (options) {
    options = $.extend({
      start: 1,
      vertical: false,
      mainClass: "simple_tabs",
      verticalClass: "simple_tabs_vertical",
      horizontalClass: "simple_tabs_horizontal",
      tabIdSuffix: "-tab-",
      tabActiveClass: "active",
      ajaxMessageError: "Sorry! No data to load :(",
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
        itemClass: "tab_content",
        tabButtonTitleAttribute: "data-tab-title"
      },
      callbacks: {
        callBeforeChange: null,
        callAfterChange: null
      }
    }, options);

    var start_tab = options.start,
      vertical = options.vertical,
      tabIdSuffix = options.tabIdSuffix,
      tabActiveClass = options.tabActiveClass,
      ajaxMessageError = options.ajaxMessageError,
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
      tabButtonTitleAttribute = options.content.tabButtonTitleAttribute,
      // CallBacks
      callBeforeChange = options.callbacks.callBeforeChange,
      callAfterChange = options.callbacks.callAfterChange,
      // Start work
      element = this;

    function init() {

      if (element.length > 0) {

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
          var buttonsContainer = $(element[i]).find(tabButtonsContainerElement+'.'+tabButtonsContainerClass),
              contentContainer = $(element[i]).find("." + tabContentContainerClass),
              contentContainerItem = contentContainer.children(tabContentItemElement);

          if (buttonsContainer.length === 0 && contentContainerItem.length > 0) {
            $(element[i]).prepend('<'+tabButtonsContainerElement+' class="'+tabButtonsContainerClass+'"></'+tabButtonsContainerElement+'>');
            buttonsContainer = $(element[i]).find(tabButtonsContainerElement+'.'+tabButtonsContainerClass);
            for (var j = 0; j <= contentContainerItem.length; j++) {
              if ($(contentContainerItem[j]).attr(tabButtonTitleAttribute)) {
                $(buttonsContainer).append('<'+tabButtonsItemElement+'><'+tabButtonsLinkElement+'>'+$(contentContainerItem[j]).attr(tabButtonTitleAttribute)+'</'+tabButtonsLinkElement+'></'+tabButtonsItemElement+'>');
              }
            }
          }

          var buttonsItem = $(buttonsContainer).find(tabButtonsItemElement);
          for (var j = 0; j <= buttonsItem.length; j++) {
            $(buttonsItem[j])
              .addClass(tabButtonsItemClass)
              .find(tabButtonsLinkElement)
              .attr('href', '#' + $(element[i]).attr("id") + tabIdSuffix + parseInt(j + 1))
              .addClass(tabButtonsLinkClass);
            if ($(buttonsItem[j]).find(tabButtonsLinkElement).attr('data-ajax')) {
              $(contentContainer).append('<' + tabContentItemElement
                + ' data-ajax="' + $(buttonsItem[j]).find(tabButtonsLinkElement).attr('data-ajax') + '">'
                + '</' + tabContentItemElement + '>');
            }
          }
          contentContainerItem = contentContainer.children(tabContentItemElement);
          for (var j = 0; j <= contentContainerItem.length; j++) {
            $(contentContainerItem[j])
              .attr('id', '' + $(element[i]).attr("id") + tabIdSuffix + parseInt(j + 1))
              .addClass(tabContentItemClass);
          }
          $(buttonsItem).find('.' + tabButtonsLinkClass).click(function () {
            click($(this), $(this).closest('.' + mainClass));
            return false
          });
          if (start_tab > 0) {
            click($(buttonsItem[start_tab - 1]).find('.' + tabButtonsLinkClass),
              $(element[i]));
          }
        }
      }
    }

    function hide(e, tabs) {
      var tabs_contant = $(tabs)
        .children('.' + tabContentContainerClass)
        .children('.' + tabContentItemClass);
      var tabs_tab = $(tabs)
        .children('.' + tabButtonsContainerClass)
        .find('.' + tabButtonsItemClass)
        .removeClass(tabActiveClass);
      if (e[0]) {
        tabs_tab.removeClass(tabActiveClass);
        for (var i = 0; i < tabs_contant.length; i++) {
          $(tabs_contant[i]).removeClass(tabActiveClass);
          if ($(tabs_contant[i]).attr('data-ajax')) {
            $(tabs_contant[i]).empty()
          }
        }
      }
    }

    function show(e) {
      if (e[0]) {
        $(e[0].parentElement).addClass(tabActiveClass);
        $(e[0].hash).addClass(tabActiveClass);
        if ($(e[0].hash).attr('data-ajax')) {
          $.get($(e[0].hash).attr('data-ajax'), function (data) {
            $(e[0].hash).html(data);
          }, "html").fail(function () {
            $(e[0].hash).html(ajaxMessageError);
          });
        }
      }
    }

    function click(e, tabs) {
      if (typeof callBeforeChange === "function") {
        callBeforeChange.apply(tabs);
      } else {
        if (callBeforeChange != null) {
          console.log("Your callback callBeforeChange is not a function")
        }
      }
      hide(e, tabs);
      show(e);
      if (typeof callAfterChange === "function") {
        callAfterChange.apply(tabs);
      } else {
        if (callAfterChange != null) {
          console.log("Your callback callAfterChange is not a function")
        }
      }
    }

    init();
  }
}));