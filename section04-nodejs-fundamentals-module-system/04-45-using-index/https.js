const {send, read} = require('./internals')


function makeRequest(url, data) {
    send(url, data)
    return read()
}

makeRequest('http://google.com', 'hello')