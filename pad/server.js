var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

const robotjs = require("robotjs");
const port = 8080;

server.listen(port, (err) => {
  if (err) throw err;
  console.log("listening on", server.address());
});

app.use(require("express").static("src"));

const keyObject = {
  "Clow": "q",
  "DlowB": "W",
  "Dlow": "w",
  "ElowB": "E",
  "Elow": "e",
  "Flow": "r",
  "GlowB": "T",
  "Glow": "t",
  "AlowB": "Y",
  "Alow": "y",
  "BlowB": "U",
  "Blow": "u",

  "Cmiddle": "a",
  "DmiddleB": "S",
  "Dmiddle": "s",
  "EmiddleB": "D",
  "Emiddle": "d",
  "Fmiddle": "f",
  "GmiddleB": "G",
  "Gmiddle": "g",
  "AmiddleB": "H",
  "Amiddle": "h",
  "BmiddleB": "J",
  "Bmiddle": "j",

  "Chigh": "z",
  "DhighB": "X",
  "Dhigh": "x",
  "EhighB": "C",
  "Ehigh": "c",
  "Fhigh": "v",
  "GhighB": "B",
  "Ghigh": "b",
  "AhighB": "N",
  "Ahigh": "n",
  "BhighB": "M",
  "Bhigh": "m"
};


const fleyKeyRegex = /[\w]+[B]/g;
io.on("connection", function (socket) {
  socket.on("type", (client) => {
    const { type } = client;

    Object.entries(keyObject).forEach(([key, value]) => {
      if(type == key) {
        if (key.match(fleyKeyRegex)) {
          robotjs.keyTap(value.toLowerCase(), ['shift'])
        } else {
          robotjs.keyTap(value)
        }
      }
    })
  });
});
