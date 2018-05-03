var express = require('express');
var exphbs = require('express-handlebars');
var io = require('socket.io')(server);
var app = express();

app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.use(express.static('./web'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.hbs');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

var server = app.listen(3000, function() {
    console.log('listening on *:3000');
});