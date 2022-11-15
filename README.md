# Rapidez Order comments
Implementation of the order comments in the Rapidez checkout.

## Installation
```
composer require rapidez/order-comments
```

And include the javascript in `resources/js/app.js`:
```
require('Vendor/rapidez/order-comments/resources/js/order-comments')
```

Add the Blade components to your views in the checkout:
```
<x-order-comments::form />
```

To display the order comment, usually in the checkout, you can use:
```
<x-order-comments::overview />
```


If you want to customize the views, you can publish them with:
```
php artisan vendor:publish --provider="Rapidez\OrderComments\OrderCommentsServiceProvider" --tag=views
```


