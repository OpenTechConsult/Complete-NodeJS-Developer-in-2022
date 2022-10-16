# The require Function

HEEELLLLLOOOOOOOO!!!!!!!!

It's time to start diving into **Node modules**. We can't build every from scratch right? We want to reuse code that have been done before and focus on features that make our application unique.

If I'm building a web server for a website on ice cream. I'm not interested in the fine details of how HTTP protocol works and how my computer represents data in bits and bytes. That's not really relevant to ice cream. The thing that is going to make my website unique isn't going to be the way it makes the HTTP request. It's the way that I present information about my favorite ice cream.

So Node.js allows you to reuse code, like ways to make HTTP requests, using **node modules**, which we can also use to break down and organize our code into smaller and more manageable files.

Remember when we talked about Node.js built-ins? One of these built-ins was the **require()** function. Node.js adds a built-in function called `require()` that is not part of vanilla JavaScript. This function just take a JavaScript file, execute it, and then returns the code from that file so that we can reuse it elsewhere.

We can require any of the default built-in Node.js modules; for example the **http module** (`require('http')`) or the **events module** (`require('events')`), by passing the name of the module as a string. And as we've seen, we generally assign the result of our require function to a variable, almost always a constant that represents the value returned from that module.

We're able to require modules that are built-in, like with the **events module** or the modules that we build ourselves. And we can also use `require()` to take advantage of third party modules, which are modules built and shared by other developers.

We're going to explore each of these possibilities.