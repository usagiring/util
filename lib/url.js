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
    const encoded = encodeURIComponent(encode)
    console.log(encoded)
  }
}