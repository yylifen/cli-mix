const program = require('commander')
const shell = require('shelljs')
const log = require('../utils/log')
const version = require('../package.json').version

function run() {

    program
    .version(version)

    program
    .command('dev').alias('d').action(() => {
        log.info(`${(new Date()).toLocaleString()} It is a tool about dev Web APP cli...`)
    })

    program
    .command('build').alias('b').action(() => {
        log.info(`${(new Date()).toLocaleString()} It is a tool about build Web APP cli...`)
    })

    program
    .command('*')
    .action(() => {
        log.warn('Args are needed...')
        shell.exit(0)
    })

    program.parse(process.argv)

    if (!program.args.length) {
        log.error('Args are needed...')
        shell.exit(0)
    }

}
module.exports = run