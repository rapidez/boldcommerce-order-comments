document.addEventListener('turbolinks:load', () => {
    Vue.set(window.app.checkout, 'comment', '')

    window.app.$on('checkout-credentials-saved', (e) => {
        window.app.magentoCart('put', 'set-order-comment', {
            orderComment: {
                comment: window.app.checkout.comment
            }
        })
    })
})
