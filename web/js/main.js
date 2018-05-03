var socket = io();
var messageContainer = document.getElementById('message');

socket.on('message', function(socket){
    renderMessage('message');
});

function sendMessage (nickname, message) {
    if(nickname && message) {
        socket.emit('message', {nickname: nickname, message: message});
        renderMessage({nickname: nickname, message: message})
    }
}

function renderMessage(data){
    var div = document.createElement('div');
    div.innerHTML = '<span><strong>' + data.nickname + ':</strong>' + data.message + '</span>';
    messageContainer.insertBefore(div, messageContainer.firstChild);
    document.getElementById('greeting').style.display ="none";
};