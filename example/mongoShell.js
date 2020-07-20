const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

module.exports = async (collections, db) => {
  const user = await collections['system.users'].findOne({})
  console.log(user)

  // runCommand -> command
  // db.command()
  // collections['user'].createIndex({ _id: 1 }, { background: true })
}
