module.exports = (options) => {
    const {
        parse,
        stringify
    } = options

    if (parse) {
        let paresd = JSON.parse(parse)
        console.log(paresd)
    }
    if (stringify) {
        let stringified = JSON.stringify(stringify)
        console.log(stringified)
    }
}