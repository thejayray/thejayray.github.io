/* jshint node: true */

"use strict";

var logger = {};
var consoleLog = console.log.bind(console);
var consoleError = console.error.bind(console);

['trace', 'debug', 'info', 'warn'].forEach(function (value) {
  logger[value] = consoleLog;
});

['error', 'fatal'].forEach(function (value) {
  logger[value] = consoleError;
});

Object.freeze(logger);

module.exports = logger;
