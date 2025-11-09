var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
    res.app.locals.layout = 'home';
    next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Home Page' });
});
router.get('/shop', function(req, res, next) {
    res.render('home/shop', { title: 'product Page' });
});

router.get('/about', function(req, res, next) {
    res.render('home/about', { title: 'about Page' });
});
router.get('/contact', function(req, res, next) {
    res.render('home/contact', { title: 'Contact Page' });
});
router.get('/shop-details', function(req, res, next) {
    res.render('home/shop-details', { title: 'product-detail Page' });
});
router.get('/shopping-cart', function(req, res, next) {
    res.render('home/shopping-cart', { title: 'shopping-cart Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/blog', function(req, res, next) {
    res.render('home/blog', { title: 'blog Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/blog-details', function(req, res, next) {
    res.render('home/blog-details', { title: 'blog-detail Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/checkout', function(req, res, next) {
    res.render('home/checkout', { title: 'blog-detail Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/wishlist', function(req, res, next) {
    res.render('home/wishlist', { title: 'blog-detail Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/class', function(req, res, next) {
    res.render('home/class', { title: 'blog-detail Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
module.exports = router;


