var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');

var server = connect();


server.use(  static(__dirname + '/public'));

server.listen(3000);

livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + '/public');