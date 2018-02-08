'use strict'

const joi = require('joi')

const converseValidations = {
  converse: {
    headers: {},
    payload: {
      message: joi.string().required().description('user message')
    },
    options: {
      allowUnknown: true
    }
  },
  getDialoguesNodesList: {
    headers: {},
    options: {
      allowUnknown: true
    }
  }
}

module.exports = converseValidations
