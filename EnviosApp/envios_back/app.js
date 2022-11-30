// aqui esta toda la aplicacion.
// utilizo todos los require, los imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//importar funcion de conexion db ---> tutorial
var database = require("./config/database"); // . para que salga a la raiz, luego config, para que lo busque dentro de esa carpeta y dentro de config tenemos nuestro database .js, no hay necesidad de ponerle la extension
var auth = require("./auth/main_auth");
var cors = require('cors')
// require routers
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var ordenesRouter = require('./routes/ordenes.router');
var usuariosRouter = require('./routes/usuarios.router')

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cors
app.use(cors())
// mongo conection
database.mongoConnect()

//register uss
app.use('/usuarios', usuariosRouter);

//login
app.use('/usuarios', usuariosRouter);

//autenticacion
app.use(auth) // esta en la carpeta auth

// routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/ordenes', ordenesRouter);



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
  // res.render('error');
  res.send('error');
  // res.json(err);
});

module.exports = app;


