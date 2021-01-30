'use strict'

const path = require('path')
const app = require('./Server')

const { PORT, APP_NAME } = process.env

app.listen(PORT, () => {
    console.log(`${APP_NAME} listening to http://localhost:${PORT}`)
  })
