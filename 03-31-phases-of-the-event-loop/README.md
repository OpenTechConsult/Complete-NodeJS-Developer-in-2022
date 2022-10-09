# Phases of the Event Loop.

Let continue our investigation on how **event loop** processes events.

We've learned that when you pass a callback into a function, like `setTimeout()`, when that timer completes the callback function gets put on something called the **callback queue** or **event queue** to be executed at a later time.

## What the event loop do with the queue of callbacks ?

Let's reveal a secret here. There is no one callback queue. In fact there is several queues of callbacks that keep track of which tasks need to be run.

But if we look deep into the workings of the event loop, we'll see that there actually several different queues. Each one handles a different phase of the event loop.

## Wow, wow, wow what is this phase idea we are introducing ?

 Each phase of the event loop is responsible for different types of operations. There's four main phases of the event loop. Each of these phases is responsible for a different category of operations that the event loop processes.

    Event loop phases
    - Timers
    - I/O callbacks (I/O events)
    - setImmediate
    - Close callbacks

Each of these phases has their own queue of callbacks that are executed during that phase. e.g. A callback for `setTimeout` will go on the **timer queue**. While a callback for a File System operation will go on the **I/O queue** which is responsible for asynchronous operations. The **I/O queue** is also known as the **pol queue**.

Before we go through all of these four phases, we need to  understand this concept of timers.

There is three types of timers that we have in node.js. We might have seen some of these.

- setTimeout
- setInterval
- setImmediate

We've already seen setTimeout in action. **setInterval** is very similar except that it sets a function to be executed many time repeatedly with function calls separated by a minimum of the delay that we pass in as a parameter.

**setImmediate** is a special kind of timer. It sets the callback that we pass in to be executed as soon as possible on the event loop. In theory this means that it's going to be executed immediately. But the truth is **setImmediate** isn't so immediate. We really see this by visualizing the different phases of the event loop. Let's find out how the event loop flows through all of its different phases.

When the event loop first start executing, on the first iteration of our loop, the first phase starts getting processed. The event loop begin by going through all of our Timer callbacks. These are callbacks that were passed into **`setTimeout`** and **`setInterval`**. The even loop goes through the Timer callback queue and checks if there is any function for it to execute.


