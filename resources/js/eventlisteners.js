document.addEventListener('vue:loaded', () => {
    window.app.config.globalProperties.custom.comment = window.app.config.globalProperties.custom?.comment ?? ''

    window.$on('checkout-credentials-saved', (e) => {
        window.app.config.globalProperties.magentoCart('put', 'set-order-comment', {
            orderComment: {
                comment: window.app.config.globalProperties.custom.comment
            }
        })
    })
})
