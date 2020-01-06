var socket = io();
console.log(socket);

let username = document.querySelector('username')
let message = document.querySelector('message')
let send = document.querySelector('send')

socket.on('send-message',function(data){
    addMesasge(data)
})

send.addEventListener('click', function(evt){
    socket.emit('send-message', {
        name:username.value,
        msg:message.value
    })
    message.value = ''
})

function addMessage(data) {
    messages.innerHTML += ['<li>', data.name, ':', data.msg + '</li>'].join('')
}