const mongoose = require('mongoose')
const CWD = `${process.cwd()}`

module.exports = (options) => {
  const {
    url,
    script
  } = options

  connect()
    .then(async () => {
      let colls = await mongoose.connection.db.listCollections().toArray()
      const collMap = await colls.reduce((map, next) => {
        map[next.name] = mongoose.connection.db.collection(next.name)
        return map
      }, {})
      await require(`${CWD}/${script}`)(collMap, mongoose.connection.db)
    })
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await mongoose.disconnect()
      process.exit(0)
    })

  async function connect() {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true
      })
    } catch (e) {
      console.error(e)
    }
  }

}