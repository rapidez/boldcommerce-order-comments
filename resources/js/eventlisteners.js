import 'Vendor/rapidez/core/resources/js/app'

document.addEventListener('turbo:load', () => {
    Vue.set(window.app.custom, 'comment', window.app.custom?.comment ?? '')

    window.app.$on('checkout-credentials-saved', (e) => {
        window.app.magentoCart('put', 'set-order-comment', {
            orderComment: {
                comment: window.app.custom.comment
            }
        })
    })
})
