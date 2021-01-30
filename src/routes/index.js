'use strict'

const express = require('express')
const RootEndpoint = require('./RootEndpoint')

const registerRootEndpoints = (app) => {
    const router = express.Router()
    app.use('/', new RootEndpoint().router)
}

module.exports = {
    registerRootEndpoints
}