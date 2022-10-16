# Node Event Emitter

In the previous section, we learned about the **observer design pattern**, and how we can use it to model problems where some observers are watching a subject for events. In Node.js, the way we get notified of these events is using callback functions. We'll demonstrate this in just a second. But Node.js has another really useful built-in module, that helps us work with events, such as those in the observer pattern, where a subject emits an event to a series of observers. And that module is the **events** module, which we can find in our Node.js documentation.

When we read the **Events** module documentation, it is said that "_Much of the Node.js API is built around asynchronous event-driven architecture in which certain kinds of objects (called "**emitters**") emits named events that cause `Function` objects ("**listeners**") to be called_

Now what this means: Well our **listeners** are callback functions that are called whenever one of these events with a certain name has been emitted, where emitted just means "sending it out" or triggering some events. Specifically the way we do this is using the `EventEmitter` class, which is part of the event module.

If we go through the documentation to the section of the use of `EventEmitter` class example, we can see that the EventEmitter class can be used by doing the following:

```js
    const EventEmitter = require('events')

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter()

    myEmitter.on('event', () => {
        console.log('an even occurred')
    })

    myEmitter..emit('event')
```

We will talk about the `require()`function in detail later on. But it is what let us use the code in the `event`module. And so we can use it to introduce these concepts.

Let's stop talking about it and see it in action:
