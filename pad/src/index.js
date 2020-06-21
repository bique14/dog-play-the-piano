var socket = io.connect();
const containerKey = document.getElementById("keys-flex");
// เรียงโน๊ตผิด ต้องเรียงใหม่!!
const keys = [
  "c-",
  "d-",
  "db-",
  "e-",
  "eb-",
  "f-",
  "g-",
  "gb-",
  "a-",
  "ab-",
  "b-",
  "bb-",
  "c",
  "d",
  "db",
  "e",
  "eb",
  "f",
  "g",
  "gb",
  "a",
  "ab",
  "b",
  "bb",
  "c+",
  "d+",
  "db+",
  "e+",
  "eb+",
  "f+",
  "g+",
  "gb+",
  "a+",
  "ab+",
  "b+",
  "bb+",
];

const flatKeys = /[a-z]{1}[b]([+|-])?/g;
keys.map((k) => {
  let buttonKey = document.createElement("button");
  
  if(k.match(flatKeys)) {
    console.log('1')
    buttonKey.style.color = "white";
    buttonKey.style.background = "black";

  }
  buttonKey.id = k;
  buttonKey.innerHTML = k;
  containerKey.appendChild(buttonKey);
});

const C = document.getElementById("C");
const D = document.getElementById("D");
const E = document.getElementById("E");
const F = document.getElementById("F");
const G = document.getElementById("G");
const A = document.getElementById("A");
const B = document.getElementById("B");

C.addEventListener("click", () => {
  socket.emit("type", {
    type: "C-key",
  });
});

D.addEventListener("click", () => {
  socket.emit("type", {
    type: "D-key",
  });
});

E.addEventListener("click", () => {
  socket.emit("type", {
    type: "E-key",
  });
});

F.addEventListener("click", () => {
  socket.emit("type", {
    type: "F-key",
  });
});

G.addEventListener("click", () => {
  socket.emit("type", {
    type: "G-key",
  });
});

A.addEventListener("click", () => {
  socket.emit("type", {
    type: "A-key",
  });
});

B.addEventListener("click", () => {
  socket.emit("type", {
    type: "B-key",
  });
});
