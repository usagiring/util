module.exports = (options) => {
  const {
    parse,
    stringify
  } = options

  if (parse) {
    const paresd = JSON.parse(parse)
    console.log(paresd)
  }
  if (stringify) {
    const stringified = JSON.stringify(stringify)
    console.log(stringified)
  }
}