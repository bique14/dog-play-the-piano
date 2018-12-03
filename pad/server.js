var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

const robotjs = require('robotjs')
const port = 8080

server.listen(port, (err) => {
  if (err) throw err
  console.log('listening on', server.address())
})

app.use(require('express').static('static'))

io.on('connection', function (socket) {
  socket.on('type', client => {
    const { type } = client
    switch (type) {
      case 'C-key':
        robotjs.typeString('a')
        break;
      case 'D-key':
        robotjs.typeString('s')        
        break;
      case 'E-key':
        robotjs.typeString('d')        
        break;
      case 'F-key':
        robotjs.typeString('f')        
        break;
      case 'G-key':
        robotjs.typeString('g')        
        break;
      case 'A-key':
        robotjs.typeString('h')        
        break;
      case 'B-key':
        robotjs.typeString('j')        
        break;
    }
  })
})