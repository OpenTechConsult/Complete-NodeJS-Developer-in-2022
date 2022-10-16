const EventEmitter = require('events')

const celebrity = new EventEmitter()

// subscribe to celebrity for observer1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations! you are the best.')
    }
})

// subscribe to celebrity for observer2
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Boo! I could have done better than that!')
    }
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code)
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')

