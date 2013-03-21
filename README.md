# composite.js
## Small PoC created during Udi Dahan's SOA/DDD course @ Programutvikling, March 2013.

## To build / run

* Use [bower](http://twitter.github.com/bower/) to install client-side dependencies (currently jQuery), or download [jQuery](http://jquery.com/download/) and place in components/jquery.
* You can fire up a simple web server with [node.js](http://nodejs.org/) - or just drop the folder into your favorite web server. If you go down the node.js path, run "npm install" inside the folder to pull down dependencies (currently only the [connect](http://www.senchalabs.org/connect/) middleware).
* after "npm install" - run "node app.js" - it should fire up a web server on localhost:8888 if the port is available.

## Other links of interest

* [require.js](http://requirejs.org/) - javascript file & module loader
* [jstorage.info](http://jstorage.info/) - wrapper for browser-persistent storage.
* [eventEmitter](https://github.com/Wolfy87/EventEmitter) reimplementation of node.js' EventEmitter for use in a browser context (loosely coupled eventing between widgets etc.)
