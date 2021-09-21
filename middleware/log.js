'use strict';
const winston = require('winston');
const Props = require('../helper/api-properties');
const tsFormat = () => (new Date()).toISOString();
const fs = require('fs');
const logDir = Props.logger.path;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
var config = winston.config;
// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: logDir+'inventory-api.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    timestamp: tsFormat,
    prettyPrint: true,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    timestamp: tsFormat,
    prettyPrint: true,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
var logger = new winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
