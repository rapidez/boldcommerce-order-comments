# Rapidez Order comments
Implementation of the order comments in the Rapidez checkout.

## Installation
```
composer require rapidez/boldcommerce-order-comments
```

And include the javascript in `resources/js/app.js`:
```
require('Vendor/rapidez/order-comments/resources/js/order-comments')
```

Add the a textarea to your views in the checkout:
```
<x-rapidez::textarea
    v-model="checkout.comment"
    class="border-border"
    name="comment"
    {{ $attributes }}
/>
```

To display the order comment, usually in the checkout, you can use:
```
@{{ $root.checkout.comment }}
```
