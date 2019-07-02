const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

// util mongo -u "mongodb://root:root@127.0.0.1:27017/admin?authSource=admin" -s "./example/test.js"
module.exports = async (collections) => {
  console.log(Object.keys(collections))
  const user = await collections['system.users'].findOne({})
  console.log(user)
}
