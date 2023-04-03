# Rapidez Order comments
Implementation of the order comments in the Rapidez checkout.

## Installation
```bash
composer require rapidez/boldcommerce-order-comments
```

Add the a textarea to your views in the checkout:
```blade
<x-rapidez::textarea v-model="checkout.comment" name="comment" />
```

To display the order comment, usually in the checkout, you can use:
```blade
@{{ $root.checkout.comment }}
```
