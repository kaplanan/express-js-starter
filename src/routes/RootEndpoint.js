'use strict'

const express = require('express')
const path = require('path')

class RootEndpoint {

    constructor () {
      this.router = express.Router()
  
      /** GET mapping for basic route */
      this.router.get('/', (req, res, next) => {
        try {
          res.send('Starter on air!')
        } catch (error) {
          logger.error(error)
          next(error)
        }
      })
  }
}

module.exports = RootEndpoint