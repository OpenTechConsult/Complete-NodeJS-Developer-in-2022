# Callback Queues

We know that the **event loop** is a piece of code in **libuv** that processes asynchronous events. It handles our asynchronous code going through any relevant asynchronous callback functions in  a loop.

Node.js automatically enters this loop when it starts executing your code. And Node.js exits automatically when there are no more functions to perform.

So what exactly happens when the event loop processes events?

When Node.js execute an asynchronous functions (e.g. `setTimeout` or our file system function to read a file on our machine `readFile`), that operation is set to be executed in the background.

As we learned this operation is executed in the operating system (OS) or on the thread pool. When that operation finishes and the result is ready, Node.js places any callback function that it needs to run for that operation onto a queue.

Example: Say that our asynchronous operation is this setTimeout that wait for one second before attempting to call a callback the we're going to call **callbackOne**

> `setTimeout(callbackOne, 1000)`

What happens is that when the timer expires (when one second has passed) our callback added to the queue to be executed as soon as possible.

This is true for any callback that you set to be run when some asynchronous operation completes. This callbacks are put in a something called **`callback queue`**.

This **`callback queue`** keeps track of which callback are ready to be executed. Any new callback functions will are pushed into the queue in the FIFO order. So another setTimeout that complete immediately after the first one, will add its callback to the queue immediately after the first one. And if we had a third async operation complete with a third callback ready to execute, it callback might be added to the queue as well.

So callbacks are added in bottom of the queue and are removed from the queue from the top of the queue.

                    ^
            -----------------
            | callbackOne   |
            -----------------
            | callbackTwo   |
            -----------------
                   ^

This is what's know as FIFO (Fist In Fist Out) queue.
The first function to be put in (callbackOne) is first executed. Because it is the first callback to be pushed in the queue.

The callback queue is like a waiting area where the oldest function, the one that have been longest will be the one to get processed by our **event loop** first when it has the chance.

Node.js use this queue system so that all the callbacks functions get the fair chance to be executed in a reasonable amount of time, without interrupting each other.

In the next chapter will find out how the **event loop** uses this idea of **callback queue**

Sometimes we may have heard the term even queue or message queue throwing around in the context of event loop. These are different names that refer to the same thing. They all refer to this idea of queue of callbacks.