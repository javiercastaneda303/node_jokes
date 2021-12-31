const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const db = require('./models')

db.sequelize.sync().then(() => {
  console.log('Drop and re-sync db.')
})

const app = express()
const port = 4000 // default port to listen
const whitelist = [
  // Allow domains here
  '*'
]
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use('/', routes)
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
