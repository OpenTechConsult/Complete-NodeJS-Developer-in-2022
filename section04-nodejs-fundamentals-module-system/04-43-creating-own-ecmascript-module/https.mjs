import { send } from './request.mjs'
import { read } from  './response.mjs'

function makeRequest(url, data) {
    send(url, data)
    return read()
}

makeRequest('http://google.com', 'hello')