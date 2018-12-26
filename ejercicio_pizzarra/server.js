var app = require("express")()
var server = require("http").Server(app)
var io = require("socket.io")(server)


app.get("/", function(request, response){
	response.sendFile(__dirname + "/index.html")
});

io.on("connection", function(socket){
	console.log("Nuevo cliente conectado al servidor : "+socket.id);
	socket.on("pixel", function(p){
		socket.broadcast.emit("nuevo-pixel",p);
	});
});


server.listen(8000)
