const app = require('http').createServer();
const io = require('socket.io')(app);
module.exports.io = io;

const PORT = process.env.PORT || 3231;
const SocketManager = require('./socketManager.js');

io.on('connection', SocketManager);

app.listen(PORT, () => {
 console.log(`${'socket io connected to the port '} ${PORT}`);
});
