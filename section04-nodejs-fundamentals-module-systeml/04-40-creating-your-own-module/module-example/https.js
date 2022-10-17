const request = require('./request')
const response = require('./response')

function makeRequest(url, data) {
    request.send(url, data)
    return response.read()
}

makeRequest('http://google.com', 'hello')