'use strict'

const config = require('config')

const converseHandler = require('./converseHandler')
const converseValidations = require('./converseValidations')

const routes = [
  {
    path: '/converse',
    method: 'POST',
    handler: converseHandler.converse,
    config: {
      tags: ['api'],
      validate: converseValidations.converse
    }
  },
  {
    path: '/listDialogueNodes',
    method: 'GET',
    handler: converseHandler.getDialoguesNodesList,
    config: {
      tags: ['api'],
      validate: converseValidations.getDialoguesNodesList
    }
  }
]


module.exports = routes
