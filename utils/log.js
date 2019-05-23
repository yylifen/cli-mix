const chalk = require('chalk')

function log(msg, label) {
  console.log(label, msg)
}

exports.info = function (msg) {
  log(chalk.white(msg), chalk.cyan('[info]'))
}

exports.success = function (msg) {
  log(chalk.white(msg), chalk.green('[success]'))
}

exports.warn = function (msg) {
  log(chalk.white(msg), chalk.yellow('[warning]'))
}

exports.error = function (msg) {
  log(chalk.white(msg), chalk.red('[error]'))
}