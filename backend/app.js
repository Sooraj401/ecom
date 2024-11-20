var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const artistRouter = require('./routes/artist');
const artworkRouter = require('./routes/artwork');
var app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));




// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.options('*', cors()); // Allow preflight requests for all routes


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/artist', artistRouter);
app.use('/api/artwork', artworkRouter);

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
