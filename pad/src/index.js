var socket = io.connect();
const containerKey = document.getElementById("keys-flex");

const keys = [
  "c-",
  "db-",
  "d-",
  "eb-",
  "e-",
  "f-",
  "gb-",
  "g-",
  "ab-",
  "a-",
  "bb-",
  "b-",
  "c",
  "db",
  "d",
  "eb",
  "e",
  "f",
  "gb",
  "g",
  "ab",
  "a",
  "bb",
  "b",
  "c+",
  "db+",
  "d+",
  "eb+",
  "e+",
  "f+",
  "gb+",
  "g+",
  "ab+",
  "a+",
  "bb+",
  "b+",
];

const flatKeys = /[a-z]{1}[b]([+|-])?/g;
const afterBlackKeys = /[b|e]{1}([+|-])?/g
keys.map((k, i) => {
  let buttonKey = document.createElement("li");
  buttonKey.id = k;
  buttonKey.innerHTML = k;

  if(k.match(flatKeys)) {
    buttonKey.className = "black-key"
  } else {
    buttonKey.className = "white-key"
    if(k.match(afterBlackKeys)) {
      buttonKey.style.width = "5rem"
    }
  }

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
