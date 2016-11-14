# Simple Tabs by Alexander Sharkov
>v.1.1.1
### What's new
> * Add callbacks

>v.1.1.0
### What's new
> * Add new options
> * Cleared js code
> * Add lad html data in content using ajax ([How to use](#useAjax))

### 1.Getting Started
* Download source
###### If you use Bower
```
    bower install SimpleTabs -save
```
###### If you use NPM
```
    npm install simpletabs
```
* Load jQuery(1.7+) 
* Include source files of SimpleTabs into your project
* And read this manual to include tabs to your project

###### Html to head
```html
<!-- Important include -->
<link rel="stylesheet" href="your path/simple_tabs.css">
<!-- /Important include -->
<!-- You can include or write your own stylesheet -->
<link rel="stylesheet" href="your path/simple_tabs_theme.css">
<!-- /You can include or write your own stylesheet -->
```
###### Html before close body
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="your path/simple_tabs.js"></script>
```

### 2.Set up your HTML
You need insert my html example. And all you need add your id to container of tabs.

###### Html
```html
<!-- Simple tabs -->
<div id="some-id">
    <!-- Simple tabs buttons -->
    <ul>
        <li><a>Tab 1</a></li>
        <li><a>Tab 2</a></li>
        <li><a>Tab 3</a></li>
    </ul>   
    <!-- /Simple tabs buttons -->
    <!-- Simple tabs contents -->
    <div class="tabs_contents">
        <!-- Simple tabs content item -->
        <div>
            <p>
                Tab content
            </p>
        </div>
        <!-- /Simple tabs content item -->
        <!-- Simple tabs content item -->
        <div>
            <p>
                Tab content
            </p>
        </div>
        <!-- /Simple tabs content item -->
        <!-- Simple tabs content item -->
        <div>
            <p>
                Tab content
            </p>
        </div>
        <!-- /Simple tabs content item -->
    </div>
    <!-- Simple tabs contents -->
</div>
<!-- /Simple tabs -->
```

### 3.Call the plugin
Now call the SimpleTabs initializer function, and your tabs are ready.

###### JavaScript
```javascript
$("#some-id").SimpleTabs();
```

Or you can set call initializer function to ID container. And you can use tabs options to initializations tabs.

Example a call to initializations of tabs with all options:

###### JavaScript
```javascript
$('.some-class').SimpleTabs({
  start: 1,
  vertical: true,
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
      itemClass: "tab_content"
  },
  callbacks: {
    callBeforeChange: function() {alert('alert text');},
    callAfterChange: function() {alert('alert text');}
  }
});
```

### 4.Options list
#### Main options
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
start | number | 1 | You could select a number of the tab, and it will open, after a page has loaded. if you write a value of ***0***, not one tab will open.|
vertical | boolean | false | Options need to select what type the tabs will be. If you write ***true***, than script will add **verticalClass** to container of tabs, else script will add **horizontalClass** |
mainClass | string | "simple_tabs" | Class name for container of tabs |
verticalClass | string | "simple_tabs_vertical" | Class name for container of tabs, when **vertical** option is ***true***. |
horizontalClass | string | "simple_tabs_horizontal" | Class name for container of tabs, when **vertical** option is ***false***. |
tabIdSuffix | string | "-tab-" | suffix is necessary to create ids for the content items and links in the tabs. |
tabActiveClass | string | "active" | Class name for the active tab. |
ajaxMessageError | string | "Sorry! No data to load :(" | Text of message, when ajax can't load data. |
buttons | object | {...} | Option contains a object with several options. Look options list in [Buttons options table](#buttonOptions)  | 
content | object | {...} | Option contains a object with several options. Look options list in [Content options table](#buttonOptions)  | 
callbacks | object | {...} | Option contains a object with several options. Look options list in [Callbacks options table](#callbacksOptions)  | 

#### <a id="buttonOptions"></a> Buttons options
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
containerElement | string | "ul" | Tag name for container to links of tabs. |
containerClass | string | "tabs_buttons" | Class name for container to links of tabs. |
itemElement | string | "li" | Tag name for items to links of tabs. |
itemClass | string | "tab_button_wrapper" | Class name for items to links of tabs. |
linkElement | string | "a" | Tag name for links of tabs. |
linkClass | string | "tab_button" | Class name for links of tabs. |

#### <a id="contentOptions"></a> Content options
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
containerClass | string | "tabs_contents" | Class name for container of content of tabs. |
itemElement | string | "div" | Tag name for an item of container of content of tabs. |
itemClass | string | "tab_content" | Class name for an item of container of content of tabs. |

#### <a id="callbacksOptions"></a> Callbacks options
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
callBeforeChange | function | null | Give to you options to change other scripts or DOM elements before that a current tab will change to new. |
callAfterChange | function | null | Give to you options to change other scripts or DOM elements after that a current tab changed to new. |

Example, how to use callbacks: 
###### JavaScript
```javascript
$(".some-class").SimpleTabs({
  callbacks: {
      callBeforeChange: function() {alert('alert text');},
      callAfterChange: function() {alert('alert text');}
  }
});
```


### <a id="useAjax"></a> 5.Use Ajax
To use this function, You need add the **data-ajax** attribute with link to data in tag for links of tabs.
 
Example how to use ajax loading for data:
###### Html
```html
<!-- Simple tabs -->
<div class="some-class">
    <!-- Simple tabs buttons -->
    <ul>
        <li><a data-ajax="your path to data/1.html">Tab 1</a></li>
        <li><a data-ajax="your path to data/2.html">Tab 2</a></li>
        <li><a data-ajax="your path to data/3.html">Tab 3</a></li>
    </ul>
    <!-- /Simple tabs buttons -->
    <!-- Simple tabs contents -->
    <div class="tabs_contents">
    </div>
    <!-- Simple tabs contents -->
</div>
<!-- /Simple tabs -->
```
###### JavaScript
```javascript
$(".some-class").SimpleTabs();
```

### Notes
> One interesting moment about my tabs. You can insert any content, in button of tab, or content item of tab. You can create your own stylesheets for it. Special for you, I inserted to project scss files that you can use to create your own themes for SimpleTabs. 