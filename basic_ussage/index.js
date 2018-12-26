var server = require('http').createServer(handler);
var io = require('socket.io')(server);

function handler (req, res) {
  res.writeHead(200);
  res.end('<script src="/socket.io/socket.io.js"></script><script>io.connect()</script>');
}

io.on('connection', function (socket) {
  console.log('Se conectó un nuevo socket con id: ' + socket.id);
});

server.listen(3333);
