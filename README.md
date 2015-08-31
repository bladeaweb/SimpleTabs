### Simple Tabs from Alexander Sharkov ###
>v.1.0.0

### 1.Getting Started
Load jQuery(1.7+) and include Simple Tabs source filese

```html
<!-- Important include -->
<link rel="stylesheet" href="../source/css/simple_tabs.css">
<!-- /Important include -->
<!-- You can include or write your own stylesheet -->
<link rel="stylesheet" href="../source/css/simple_tabs_theme.css">
<!-- /You can include or write your own stylesheet -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="../source/js/simple_tabs.js"></script>
```

### 2.Set up your HTML
You need insert my html example. And all you need add your id to container of tabs.

```html
<!-- Simple tabs -->
<div id="simple_vertical_tabs">
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
Now call the SimpleTabs initializer function, and your tabs is ready.

```html
$(".some-clase").SimpleTabs();
```

Or you can set call initializer function to ID container. And you can use tabs options to initializations tabs.
Now, my tabs has two options:
1) Start number (start: start number) - default start number 1
2) Vertical or horizontal tabs (vertical: [true/false]) - default false

Example a call to initializations of tabs with options:
```html
$('#simple_vertical_tabs').SimpleTabs({start: 2, vertical: true});
```