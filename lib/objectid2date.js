const ObjectId = require('mongoose').Types.ObjectId

module.exports = (str) => {
  console.log(ObjectId(str).getTimestamp())
}