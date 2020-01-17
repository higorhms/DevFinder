import socketio from 'socket.io';

export default function setupWebsocket(server) {
    const io = socketio(server);
    io.on('connection', socket => {
        console.log(socket.id);
    });
}
