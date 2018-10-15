var server = require('./game.js');
var port = process.env.PORT || 4000;

server.listen(port, function () {
  console.log('Server running on port %d', port);
});
