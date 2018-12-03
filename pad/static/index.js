var socket = io.connect()

const C = document.getElementById("C")
const D = document.getElementById("D")
const E = document.getElementById("E")
const F = document.getElementById("F")
const G = document.getElementById("G")
const A = document.getElementById("A")
const B = document.getElementById("B")

C.addEventListener('click', () => {
  socket.emit('type', {
    type: 'C-key'
  })

})

D.addEventListener('click', () => {
  socket.emit('type', {
    type: 'D-key'
  })

})

E.addEventListener('click', () => {
  socket.emit('type', {
    type: 'E-key'
  })

})

F.addEventListener('click', () => {
  socket.emit('type', {
    type: 'F-key'
  })

})

G.addEventListener('click', () => {
  socket.emit('type', {
    type: 'G-key'
  })

})

A.addEventListener('click', () => {
  socket.emit('type', {
    type: 'A-key'
  })

})

B.addEventListener('click', () => {
  socket.emit('type', {
    type: 'B-key'
  })
})