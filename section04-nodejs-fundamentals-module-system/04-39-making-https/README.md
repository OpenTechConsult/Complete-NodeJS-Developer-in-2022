# Making HTTP requests

What can we do with the built-in modules. We have all of these functionalities that we see here in the documentation built into node.js, including working with the **File System**, **encryption** and **HTTP**.

We are going to do an example using the **HTTP** module to browse the web. We'll see what we can do just using the power of built-in node functionalities. Let's trying to duplicate what happens when we visit **google.com** in our browser.

## How to do it ?

1. create a JavaScript file called**http-example.js**.
2. Require the **http** module by typing the following:

    ```js
        const http = require('http')
    ```

    We are going to use the **http** constant to make requests to **google** servers.

    The **require** function has set the **http** constant to the set of functions and data that are returned from the **http** module.

    One of these functions is the **request** function, which which we can call using **`http.request()`**

3. call the **request** function by typing the following:

    ```js
        http.request()
    ```

    We can see that the **request** function can take a **string**, a **URL** or a **RequestOptions** object as its first argument, and a **callback** as its second argument. This is a convention that we'll see throughout Node.js, where the callback is the last argument that we pass into asynchronous function.

4. write the first and the second arguments to the **request** function. The first argument being the URL we want to make our request to. The second argument being the callback function that will be executed once the request is successfully made. The callback is our case is an arrow function with a **response** as an argument. The **response** argument passed into our callback is result of making the request we just specified.

    ```js
        http.request('www.google.com', (res) => {

        })
    ```

5. The way we get data back from our response is by calling the `on()` function which takes the name of an event as a string and then a listener a callback. We've bumped into a real life example of the EventEmitter in action. The event that we respond to is called `data`. And the data event has a parameter for a **chunk** of data returned by that event. Let's try logging the data that we just got back.

    ```js
        http.request('www.google.com', (res) => {
            res.on('data', (chunk) => {
                console.log(`Data chunk: ${chunk}`);
            })
        })
    ```

    A **chunk** is just a piece of data, that's not necessarily the whole of the response. We could receive more than one of these data events if the size of the response from our server is very large. And the fact that we can get more than one of these events makes it a perfect use case for the EventEmitter. Our **response** here is among other things an **event emitter**.

    One of the events the **response** can emit is `end()` event which is send when there is no more data coming in from the request. It doesn't have any parameters. And in its callback, we just display _no more data_ to make sure we are getting this event.

    ```js
    res.on('end', () => {
        console.log('No more data')
    })
    ```

6. Before we try out the example, we need to do something with the result of the `http.request()` method call. We first access it by first saving it to a constant called `req`. And on the `req` constant, call the `end()` function.

    ```js
        const http = require('http')

        const req = http.request('www.google.com', (res) => {
            res.on('data', (chunk) => {
                console.log(`Data chunk: ${chunk}`)
            })

            res.on('end', () => {
                console.log('No more data')
            })
        })

        req.end()
    ```

    We always need to call the `end()` method on the `req` constant, because the `end()` function will cause the request to be sent.

    To demonstrate that, let comment out the line `req.end()` and run the file by typing the following:

    ```bash
        node http-example.js
    ```

    We wait to see the response but nothing happening. This is because we didn't trigger the request to be sent by calling `req.end()`.

