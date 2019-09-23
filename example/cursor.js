const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

module.exports = async (collections) => {
  const user = collections['users'].find({}).addCursorFlag('noCursorTimeout', true)
}

