const request = require('./request.js')
const response = require('./response.js')

module.exports = {
    REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
    send: request.send,
    read: response.read,
}