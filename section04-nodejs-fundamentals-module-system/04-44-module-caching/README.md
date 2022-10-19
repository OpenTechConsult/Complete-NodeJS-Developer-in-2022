# Module Caching

When loading a module, whether it is a CommonJS module or an Ecmascript module, Node.js caches that module.
Let's explore what that means.

Say that we have our **request.js** file like in the previous application. Say that in addition to to the assignments and functions in that file, the **request.js** file has some code that execute whenever it's loaded.

when we execute the https.js file (`node https.js`), we see that the request.js file is executed before the main code of the https.js module.

If we call the `require('./request')` multiple times in the **http.js** file, we might expect to see the executable code of the request.js file executing multiple time. But this is not the cases. The executable code of the request.js file only executes once.

In larger programs, it's very likely that we might have modules that are required in multiple different places. For example if we create a module for http, we might also require the **'.\request.js'** file.

It's likely that some of our modules will be loaded and required in multiple different spots. So in order to be efficient, and to prevent behavior that part of our module be run over and over again, Node maintains a cache of required modules.

This cache is global and it lives under the `require.cache`object. It is not something that we'll be working with very often at least not directly.