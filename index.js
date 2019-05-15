#!/usr/bin/env node

const program = require('commander')

// let [, , params] = process.argv
program.version('0.0.1')

program
    .option('-d, --decode <params>')
    .option('-e, --encode <params>')
    .action(job)
    .parse(process.argv);

function job(options) {
    let {
        decode,
        encode
    } = options
    if (decode) {
        let decoded = decodeURI(decode)
        console.log(decoded)
    }
    if (encode) {
        let encoded = encodeURI(encode)
        console.log(encoded)
    }
}