'use strict'

const boom = require('boom')
const httpStatus = require('http-status')

const converseCtrl = require('./converseCtrl')
const logger = require('../utils/logger')

const handleError = (error) => {
  !error.logged && logger.error(error)
  return response(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: error }))
}

const converse = async (request, response) => {
  const inputMessage = request.payload.message
  const conversationContext = request.payload.conversationContext && JSON.parse(request.payload.conversationContext)

  try {
    const converseResponse = await converseCtrl.converse(inputMessage, conversationContext)
    return response(converseResponse)
  } catch (error) {
    handleError(error);
  }
}

const getDialoguesNodesList = async (request, response) => {
  try {
    const messageReply = await converseCtrl.getDialoguesNodesList()
    return response(messageReply)
  } catch (error) {
    handleError(error);
  }
} 

module.exports = {
  converse,
  getDialoguesNodesList
}
