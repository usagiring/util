module.exports = (options) => {
    const {
        decode,
        encode
    } = options
    if (decode) {
        const decoded = Buffer.from(decode, 'base64').toString('ascii')
        console.log(decoded)
    }
    if (encode) {
        const encoded = Buffer.from(encode).toString('base64')
        console.log(encoded)
    }
}