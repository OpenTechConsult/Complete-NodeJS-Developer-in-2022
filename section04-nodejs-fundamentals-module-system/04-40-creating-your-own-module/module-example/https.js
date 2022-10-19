const { send } = require('./request')
const { read } = require('./response')

function makeRequest(url, data) {
    send(url, data)
    return read()
}

makeRequest('http://google.com', 'hello')