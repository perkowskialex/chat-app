document.addEventListener('DOMContentLoaded', function(){
    console.log('dom loaded')

let username = document.getElementById('username')
let message = document.getElementById('message')
let send = document.getElementById('send')

var socket = io();
socket.on('send-message',function(data){
    addMessage(data)
})

send.addEventListener('click', function(){
    socket.emit('send-message', {
        name:username.value,
        msg:message.value
    })
    message.value = ''
})

function addMessage(data) {
    messages.innerHTML += ['<li>', data.name, ': ', data.msg + '</li>'].join('')
}
})