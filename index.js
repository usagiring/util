#!/usr/bin/env node

const program = require('commander')
const { url, json, mongo, uuid } = require('./lib')

program.version('0.0.1')

program
    .command('url')
    .option('-d, --decode <params>')
    .option('-e, --encode <params>')
    .action(url)

program
    .command('json')
    .option('-p, --parse <params>')
    .option('-s, --stringify <params>')
    .action(json)

program
    .command('mongo')
    .option('-u, --url <params>')
    .option('-s, --script <params>')
    .action(mongo)

program
    .command('uuid')
    .action(uuid) 

program.parse(process.argv);