# Phases of the Event Loop.

Let continue our investigation on how **event loop** processes events.

We've learned that when you pass a callback into a function, like `setTimeout()`, when that timer completes the callback function gets put on something called the **callback queue** or **event queue** to be executed at a later time.

## What the event loop do with the queue of callbacks ?

Let's reveal a secret here. There is no one callback queue. In fact there is several queues of callbacks that keep track of which tasks need to be run.

But if we look deep into the workings of the event loop, we'll see that there actually several different queues. Each one handles a different **phase of the event loop**.

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

When the event loop first start executing, on the first iteration of our loop, the first phase starts getting processed. The event loop begin by going through all of our Timer callbacks. These are callbacks that were passed into **`setTimeout`** and **`setInterval`**. The even loop goes through the Timers callback queue and checks if there is any function for it to execute (functions for timers that have completed).

Once it has processed all of the functions in the **Timer** phase, the event loop moves on to the next phase: the **I/O callback** phase. (We're still in the first iteration of the event loop or what we call the first thick of the event loop.)

**The I/O callbacks phase** is where the majority of all our callbacks lived in the real life Node.js application. It include things like **network operations** as well as **file system operations**, but also basically anything that doesn't fit in the others callbacks phases goes in the **I/O callback phase**

So if our code is done reading a file, the callback for that read operation will be pushed onto the IO phase callback queue and will be executed in this IO callback phase.

Next up, we have the **setImmediate** phase. Remember, **setImmediate** is a special kind of timers (like setTimeout or setInterval) but that instead execute after the **IO phase**. As we can see, functions passed to **setImmediate** actually execute after those passed into timers. It is called **setImmediate** because it runs immediately after any I/O operation have finished executing, and before another cycle of the event loop start.

Before we move on to that next tick, there is one more phase. The **close callback phase**. This is when you close a file or a network connection and you have a callback that execute when that callback is closed. That's what goes in this last phase!

When all of these **close callbacks** have been processed, the **event loop** cycle begins again! And it goes through the list of different functions that it needs to execute.

So the **event loop** checks the timers queue, asking: are there any timers callback functions to execute? If yes it runs them. When it's done, it asks the I/O callback queue, are there any callback functions to execute ? When it's done, it moves on to the next phase, and so on, until we start a new tick of the event loop.

Now, there are a couple of other phases in the event loop like the **idle** and **prepare** phases. But they are only used internally by NodeJS. Our JavaScript can't do any operations there so these phases aren't really important to us.

The four phases that we have seen before are those that really capture the behavior of the event loop and how it interacts with JavaScript.

By going through this different types of functions in these different queues, the event loop makes sure that all the functions that make up our asynchronous program eventually execute.

That's it/ Node.js combines this **event loop** along with the **V8 engine** and **libuv** to bring JavaScript to the server, allowing us to create all theses websites and servers and applications that we can possibly imagine.  
