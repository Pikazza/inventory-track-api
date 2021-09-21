var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan =require('morgan');
const logger =require('./middleware/log');
const db =require('./middleware/db');
const bodyParser =require('body-parser');
const cors =require('cors');

var app = express();
const router = express.Router();
app.use(router);



app.use(morgan(':date[iso] :remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent',
{ stream: { write: message => console.log(message.trim()) }}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));



var corsOptions = {
  // origin : [/\.localhost$/, /\:420.$/],
  origin : "*",
  methods:['GET', 'PUT', 'POST','PUT','DELETE','PATCH','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization','x-client-id'],
  optionsSuccessStatus: 204
}

router.use(cors(corsOptions));
router.options('*', cors(corsOptions));

require('./routes/customers')(router);

require('./middleware/error-middleware')(router);

// catch 404 and forward to error handler
// router.use(function(req, res, next) {
// });


app.listen(8080, () => logger.info('Server is listening on port: 8080'));
