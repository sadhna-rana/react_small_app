let app = require('http').createServer();
let io = module.exports.io = require('socket.io')(app);

let PORT = process.env.PORT || 3231;
const SoketManager = require('./socketManager.js');

io.on('connection', SoketManager);

app.listen(PORT, () => {
console.log('socket io connected to the port' + PORT);
});
