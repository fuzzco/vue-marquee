module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/vue-marquee/' : '/',
    css: {
        extract: false
    }
}
