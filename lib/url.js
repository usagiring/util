module.exports = (options) => {
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