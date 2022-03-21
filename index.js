#!/usr/bin/env node

const program = require('commander')
const { url, json, mongo, uuid, base64, objectid2date } = require('./lib')

program.version('0.0.3')

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

program
  .command('base64')
  .option('-d --decode <params>')
  .option('-e --encode <params>')
  .action(base64)

program
  .command('objectid2date')
  .argument('<string>')
  .action(objectid2date)

program.parse(process.argv);