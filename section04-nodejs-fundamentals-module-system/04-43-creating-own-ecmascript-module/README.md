# Creating your own Ecmascript modules

How to write our example if we want to use Ecmascript module. By replacing our **require()** function call with **import** statements. And our `module/export = {}` with an export statement.

To import a module, we write the following:

```js
    import { send } from './request'
    import { read } from './response'
```

Something to be aware of, when using **CommonJS** module and the **require** statement, you might hear **import** used as a synonym for **require()**.

In our response.js file, we replace our `module.exports` with a call to export like so:

```js
    export {
        read,
    }
```

We do this in the response.js file and the request.js file.

If we test the application by running `node https.js`, we will get an error that says the following:

```bash
    import { send } from './request'
    ^^^^^

    SyntaxError: Cannot use import statement outside a module
```

When we scroll up the error log further, we see this message:

```bash
(node:14965) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
```

The reason we see this message is because Node.js treats **.js** files as CommonJS modules by default, for backwards compatibility.

Since Node.js has been created with CommonJS modules, we need to tell it explicitly to treat our code as ECMAScript modules by naming the file with **.mjs** extension.

So let's make that change in our project.

There's one more change that we need to make. If we go to the Node.js documentation under **_ECMAScript modules_** and we go to the terminology section, it is mentioned that the file extension is necessary when importing module with relative path, unlike the CommonJS modules.

