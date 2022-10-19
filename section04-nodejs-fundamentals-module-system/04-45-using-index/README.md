# Using index.js

When working with Node.js projects, we may come across a file named index.js. Let's explore what this file means and how it might affects us.

**Index.js** file is a special case in Node.js. It allows us to treat a folder like a module. So that we pass a path to folder to the **require()** function, it resolves to the index.js file.

**index.js** allows us to export functions from many different modules that live in a single folder from a single point; which can then be referenced using just the name of path to that folder.