# Building RESTful APIs with Express #
Rest defines a set of conventions for creating HTTP services:
- POST: to create a resources
- PUT: to update it
- GET: to read it
- DELETE: to delete it
## Notes ##
- [Nodemon](https://www.npmjs.com/package/nodemon) is used to watch for changes in files and automatically restart the node process
- [Joi](https://www.npmjs.com/package/joi) can be used to perform input validation
- Environment variables can be used to stroe settings for an application, to read an environment variable use `process.env`
- `const port = process.env.PORT || 3000;` Listens to an environment variable, if not found uses port 3000