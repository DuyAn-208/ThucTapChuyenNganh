var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var blogRouter = require('./routes/blog');
var blog_detailsRouter = require('./routes/blog-details');
var checkoutRouter = require('./routes/checkout');
var classRouter = require('./routes/class');
var contactRouter = require('./routes/contact');
var shop_detailsRouter = require('./routes/shop-details');
var shopping_cartRouter = require('./routes/shopping-cart');
var shopRouter = require('./routes/shop');
var wishlistRouter = require('./routes/wishlist');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/blog-details', blog_detailsRouter);
app.use('/checkout', checkoutRouter);
app.use('/class', classRouter);
app.use('/contact', contactRouter);
app.use('/shop-details', shop_detailsRouter);
app.use('/shopping-cart', shopping_cartRouter);
app.use('/wishlist', wishlistRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
