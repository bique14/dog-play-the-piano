var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

const robotjs = require('robotjs')
const port = 8080

server.listen(port, (err) => {
  if (err) throw err
  console.log('listening on', server.address())
})

app.use(require('express').static('src'))

io.on('connection', function (socket) {
  socket.on('type', client => {
    const { type } = client
    switch (type) {
      case 'C-key':
        robotjs.keyTap('a')
        break;
      case 'D-key':
        robotjs.keyTap('s')
        break;
      case 'E-key':
        robotjs.keyTap('d')
        break;
      case 'F-key':
        robotjs.keyTap('f')
        break;
      case 'G-key':
        robotjs.keyTap('g')
        break;
      case 'A-key':
        robotjs.keyTap('h')
        break;
      case 'B-key':
        robotjs.keyTap('j')
        break;
    }
  })
})