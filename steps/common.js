const {expect} = require("playwright/test") 
const {Given, Then} = require('@cucumber/cucumber')

global.fs = require('file-system')
global.moment = require('moment')
global.utils = require('../support/utils.js')
global.scope = require('../support/scope.js')
global.action = require('./definitions/action.js')
global.Given = Given
global.Then = Then
global.expect = expect