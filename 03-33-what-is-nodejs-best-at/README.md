# What is Node.js Best At ?

When is using Node.js the right choice ? Let's think about it in terms of what we've learned so far.
Remember when the computer is reading from a file on the disk or making a request over the network.
The CPU is just spending a lot of time just lounging about not working very hard. And it the devices, like the disk or the network cards that are doing all the work.

We now have a more complete picture of this: where our JavaScript code sends works to the operating system through the **JavaScript engine** and **libuv**, and it's our operating system which communicates at the lowest level to the CPU in what's called the **machine code**. And finally as we saw before, the CPU will delegate certain tasks to our devices over a communication channel known as a bus.

The point is that this whole system works, but it's more optimized and faster in certain situations.

Node.js is not particularly good at things like _video_ processing, or _machine learning_. These are **blocking processor heavy computations**. They block our CPU or in the case of machine learning sometimes our **graphics cards of GPU**. There're possible but won't really give us any advantages over other languages and runtime.

What Node.js is really good at is **servers** and the many various things that the servers do like talking to databases, and coordinating with many other servers and services on the web. For things like email or authentication.

Node.js works really well, when your main performance problem is **Input/Output** rather than heavy calculations. It works best when we can delegate this tasks to our operating system and the devices on our computer. If our code blocks in JavaScript or is using the CPU heavily then our event loop will get stuck. Then Node.js won't be able to manage other tasks happening side by side efficiently.

On the other hand, Node is really good at **<u>serving data I/O heavy applications</u>**, which just so happens to be most of what we do on the Internet.

For example video streaming like Netflix is mainly I/O, sending video files from a database of videos through a server like Node into a user's web browser or a Netflix application. In fact, this how Netflix actually works using Node.js.

Fortunately for us, the Node model aligns really well on how modern web applications are built. They take advantage of existing technologies like databases and various services on the web that we can put together to make something useful. Node.js is the glue that puts every thing together. It was made for the modern web, which is why Node.js is doing so well.
