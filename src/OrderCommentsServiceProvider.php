<?php

namespace Rapidez\OrderComments;

use Illuminate\Support\ServiceProvider;


class OrderCommentsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->bootPublishables()
            ->bootViews();
    }

    protected function bootPublishables() : self
    {
        $this->publishes([
                __DIR__.'/../resources/views' => resource_path('views/vendor/order-comments'),
            ], 'views');

        return $this;
    }

    protected function bootViews() : self
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'order-comments');

        return $this;
    }
}
