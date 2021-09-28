module.exports = (options) => {
  const {
    decode,
    encode
  } = options
  if (decode) {
    const decoded = decodeURIComponent(decode)
    console.log(decoded)
  }
  if (encode) {
    const encoded = decodeURIComponent(encode)
    console.log(encoded)
  }
}