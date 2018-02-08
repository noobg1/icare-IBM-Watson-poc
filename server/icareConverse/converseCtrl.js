'use strict'

const watson = require('watson-developer-cloud')
const lodash = require('lodash')

const conversation = watson.conversation({
  username: process.env.CONVERSATION_USERNAME,
  password: process.env.CONVERSATION_PASSWORD,
  version: 'v1',
  version_date: '2017-05-26'
});

const converse = (inputMessage, conversationContext) => {
  return new Promise((resolve, reject) => {
    const callback =  (error, response) => {
      return error ? reject(error) : resolve(response);
     }
    const mandatoryParams = {
      workspace_id: process.env.WORKSPACE_ID,
      input: {'text': inputMessage}
    }
    const optionalParams = {
      context: conversationContext
    }
    const messageParams = lodash.isEmpty(conversationContext) ? mandatoryParams : {...mandatoryParams, ...optionalParams}
    conversation.message(messageParams, callback);
  });  
}

const getDialoguesNodesList = () => {
  return new Promise((resolve, reject) => {
    const callback =  (error, response) => {
      return error ? reject(error) : resolve(response);
     }
    const mandatoryParams = {
      workspace_id: process.env.WORKSPACE_ID
    }
   
    conversation.listDialogNodes(mandatoryParams, callback);
  });
}

module.exports = {
  converse,
  getDialoguesNodesList
}
