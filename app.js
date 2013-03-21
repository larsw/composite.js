var connect = require('connect');
console.log('up and running on http://localhost:8888/...');
connect.createServer(connect.static(__dirname)).listen(8888);