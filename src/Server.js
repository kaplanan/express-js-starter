'use strict'

/** Basic */
const express = require('express')
const path = require('path')

/** Logging & Tracing */
const { expressMiddleware } = require('cls-rtracer')

/** Security */
const cors = require('cors')
const helmet = require('helmet')

/** API & Routes */
const { registerRootEndpoints } = require('./routes')

const corsEnabledLocation = process.env.CORS_ENABLED_LOCATION

/* **********************************************************************************
 *                              Setup & configure app
 ********************************************************************************** */

/** Install express app */
const app = express()

/** Security */
if (corsEnabledLocation !== undefined) {
    app.use(cors({ origin: corsEnabledLocation }))
}

app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(expressMiddleware())

/** Route mask for logging of any incoming request */
app.use((req, res, next) => {
    console.log('Starter up')
    next()
})

/* **********************************************************************************
 *                                     Endpoints
 ********************************************************************************** */

registerRootEndpoints(app)

/* **********************************************************************************
 *                                  Export App Server
 ********************************************************************************** */

module.exports = app