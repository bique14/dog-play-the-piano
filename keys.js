window.addEventListener('load', async () => {
  console.log('page loaded')
  try {
    await loadFileAsync('./sound/โดต่ำ.mp3');
    await loadFileAsync('./sound/เรต่ำ.mp3');
    await loadFileAsync('./sound/มีต่ำ.mp3');
    await loadFileAsync('./sound/ฟาต่ำ.mp3');
    await loadFileAsync('./sound/ซอลต่ำ.mp3');
    await loadFileAsync('./sound/ลาต่ำ.mp3');
    await loadFileAsync('./sound/ทีต่ำ.mp3');
    await loadFileAsync('./sound/โด.mp3');
    await loadFileAsync('./sound/เร.mp3');
    await loadFileAsync('./sound/มี.mp3');
    await loadFileAsync('./sound/ฟา.mp3');
    await loadFileAsync('./sound/ซอล.mp3');
    await loadFileAsync('./sound/ลา.mp3');
    await loadFileAsync('./sound/ที.mp3');
    await loadFileAsync('./sound/โดสูง.mp3');
    await loadFileAsync('./sound/เรสูง.mp3');
    await loadFileAsync('./sound/มีสูง.mp3');
    await loadFileAsync('./sound/ฟาสูง.mp3');
    await loadFileAsync('./sound/ซอลสูง.mp3');
    await loadFileAsync('./sound/ลาสูง.mp3');
    await loadFileAsync('./sound/ทีสูง.mp3');
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Everything loaded')
  }
})

const loadFileAsync = (url) => {
  return new Promise((resolve, reject) => {
    if (url) {
      let script = document.createElement('audio');
      script.src = url;
      document.body.appendChild(script);
      console.log(script)
      resolve(true);
    } else {
      reject(false);
    }
  });
}

var img = document.getElementById("dog")
var sound = document.getElementById("play")

var Clow = document.getElementById("c-")
var Dlow = document.getElementById("d-")
var DlowB = document.getElementById("db-")
var Elow = document.getElementById("e-")
var ElowB = document.getElementById("eb-")
var Flow = document.getElementById("f-")
var Glow = document.getElementById("g-")
var GlowB = document.getElementById("gb-")
var Alow = document.getElementById("a-")
var AlowB = document.getElementById("ab-")
var Blow = document.getElementById("b-")
var BlowB = document.getElementById("bb-")

var Cmiddle = document.getElementById("c")
var Dmiddle = document.getElementById("d")
var DmiddleB = document.getElementById("db")
var Emiddle = document.getElementById("e")
var EmiddleB = document.getElementById("eb")
var Fmiddle = document.getElementById("f")
var Gmiddle = document.getElementById("g")
var GmiddleB = document.getElementById("gb")
var Amiddle = document.getElementById("a")
var AmiddleB = document.getElementById("ab")
var Bmiddle = document.getElementById("b")
var BmiddleB = document.getElementById("bb")

var Chigh = document.getElementById("c+")
var Dhigh = document.getElementById("d+")
var DhighB = document.getElementById("db+")
var Ehigh = document.getElementById("e+")
var EhighB = document.getElementById("eb+")
var Fhigh = document.getElementById("f+")
var Ghigh = document.getElementById("g+")
var GhighB = document.getElementById("gb+")
var Ahigh = document.getElementById("a+")
var AhighB = document.getElementById("ab+")
var Bhigh = document.getElementById("b+")
var BhighB = document.getElementById("bb+")

var sounds = {
  81: './sound/โดต่ำ.mp3', // q
  87: './sound/เรต่ำ.mp3', // w
  69: './sound/มีต่ำ.mp3', // e
  82: './sound/ฟาต่ำ.mp3', // r
  84: './sound/ซอลต่ำ.mp3', // t
  89: './sound/ลาต่ำ.mp3', // y
  85: './sound/ทีต่ำ.mp3', // u

  65: './sound/โด.mp3', // a
  83: './sound/เร.mp3', // s
  68: './sound/มี.mp3', // d
  70: './sound/ฟา.mp3', // f
  71: './sound/ซอล.mp3', // g
  72: './sound/ลา.mp3', // h
  74: './sound/ที.mp3', // j

  90: './sound/โดสูง.mp3', // z
  88: './sound/เรสูง.mp3', // x
  67: './sound/มีสูง.mp3', // c
  86: './sound/ฟาสูง.mp3', // v
  66: './sound/ซอลสูง.mp3', // b
  78: './sound/ลาสูง.mp3', // n
  77: './sound/ทีสูง.mp3' // m
}

document.onkeydown = function (e) {
  var soundId = sounds[e.keyCode];
  if (e.shiftKey && e.keyCode === 87) { // w
    img.src = "right_hand_clicked.jpg"
    DlowB.src = './sound/เรต่ำb.mp3'
    DlowB.play()
  } else if (e.shiftKey && e.keyCode === 69) { // e
    img.src = "left_hand_clicked.jpg"
    ElowB.src = './sound/มีต่ำb.mp3'
    ElowB.play()
  } else if (e.shiftKey && e.keyCode === 84) { // t
    img.src = "right_hand_clicked.jpg"
    GlowB.src = './sound/ซอลต่ำb.mp3'
    GlowB.play()
  } else if (e.shiftKey && e.keyCode === 89) { // y
    img.src = "left_hand_clicked.jpg"
    AlowB.src = './sound/ลาต่ำb.mp3'
    AlowB.play()
  } else if (e.shiftKey && e.keyCode === 85) { // u
    img.src = "right_hand_clicked.jpg"
    BlowB.src = './sound/ทีต่ำb.mp3'
    BlowB.play()
  } else if (e.shiftKey && e.keyCode === 83) { // s
    img.src = "left_hand_clicked.jpg"
    DmiddleB.src = './sound/เรb.mp3'
    DmiddleB.play()
  } else if (e.shiftKey && e.keyCode === 68) { // d
    img.src = "right_hand_clicked.jpg"
    EmiddleB.src = './sound/มีb.mp3'
    EmiddleB.play()
  } else if (e.shiftKey && e.keyCode === 71) { // g
    img.src = "left_hand_clicked.jpg"
    GmiddleB.src = './sound/ซอลb.mp3'
    GmiddleB.play()
  } else if (e.shiftKey && e.keyCode === 72) { // h
    img.src = "right_hand_clicked.jpg"
    AmiddleB.src = './sound/ลาb.mp3'
    AmiddleB.play()
  } else if (e.shiftKey && e.keyCode === 74) { // j
    img.src = "left_hand_clicked.jpg"
    BmiddleB.src = './sound/ทีb.mp3'
    BmiddleB.play()
  } else if (e.shiftKey && e.keyCode === 88) { // x
    img.src = "right_hand_clicked.jpg"
    DhighB.src = './sound/เรสูงb.mp3'
    DhighB.play()
  } else if (e.shiftKey && e.keyCode === 67) { // c
    img.src = "left_hand_clicked.jpg"
    EhighB.src = './sound/มีสูงb.mp3'
    EhighB.play()
  } else if (e.shiftKey && e.keyCode === 66) { // b
    img.src = "right_hand_clicked.jpg"
    GhighB.src = './sound/ซอลสูงb.mp3'
    GhighB.play()
  } else if (e.shiftKey && e.keyCode === 78) { // n 
    img.src = "left_hand_clicked.jpg"
    AhighB.src = './sound/ลาสูงb.mp3'
    AhighB.play()
  } else if (e.shiftKey && e.keyCode === 77) { // m
    img.src = "right_hand_clicked.jpg"
    BhighB.src = './sound/ทีสูงb.mp3'
    BhighB.play()
  } else if (e.keyCode === 81) { // q
    img.src = "left_hand_clicked.jpg"
    Clow.src = './sound/โดต่ำ.mp3'
    Clow.play()
  } else if (e.keyCode === 87) { // w
    img.src = "right_hand_clicked.jpg"
    Dlow.src = './sound/เรต่ำ.mp3'
    Dlow.play()
  } else if (e.keyCode === 69) { // e
    img.src = "left_hand_clicked.jpg"
    Elow.src = './sound/มีต่ำ.mp3'
    Elow.play()
  } else if (e.keyCode === 82) { // r
    img.src = "right_hand_clicked.jpg"
    Flow.src = './sound/ฟาต่ำ.mp3'
    Flow.play()
  } else if (e.keyCode === 84) { // t
    img.src = "left_hand_clicked.jpg"
    Glow.src = './sound/ซอลต่ำ.mp3'
    Glow.play()
  } else if (e.keyCode === 89) { // y
    img.src = "right_hand_clicked.jpg"
    Alow.src = './sound/ลาต่ำ.mp3'
    Alow.play()
  } else if (e.keyCode === 85) { // u
    img.src = "left_hand_clicked.jpg"
    Blow.src = './sound/ทีต่ำ.mp3'
    Blow.play()
  } else if (e.keyCode === 65) { // a
    img.src = "right_hand_clicked.jpg"
    Cmiddle.src = './sound/โด.mp3'
    Cmiddle.play()
  } else if (e.keyCode === 83) { // s
    img.src = "left_hand_clicked.jpg"
    Dmiddle.src = './sound/เร.mp3'
    Dmiddle.play()
  } else if (e.keyCode === 68) { // d
    img.src = "right_hand_clicked.jpg"
    Emiddle.src = './sound/มี.mp3'
    Emiddle.play()
  } else if (e.keyCode === 70) { // f
    img.src = "left_hand_clicked.jpg"
    Fmiddle.src = './sound/ฟา.mp3'
    Fmiddle.play()
  } else if (e.keyCode === 71) { // g
    img.src = "right_hand_clicked.jpg"
    Gmiddle.src = './sound/ซอล.mp3'
    Gmiddle.play()
  } else if (e.keyCode === 72) { // h
    img.src = "left_hand_clicked.jpg"
    Amiddle.src = './sound/ลา.mp3'
    Amiddle.play()
  } else if (e.keyCode === 74) { //  j
    img.src = "right_hand_clicked.jpg"
    Bmiddle.src = './sound/ที.mp3'
    Bmiddle.play()
  } else if (e.keyCode === 90) { // z
    img.src = "left_hand_clicked.jpg"
    Chigh.src = './sound/โดสูง.mp3'
    Chigh.play()
  } else if (e.keyCode === 88) { // x
    img.src = "right_hand_clicked.jpg"
    Dhigh.src = './sound/เรสูง.mp3'
    Dhigh.play()
  } else if (e.keyCode === 67) { // c
    img.src = "left_hand_clicked.jpg"
    Ehigh.src = './sound/มีสูง.mp3'
    Ehigh.play()
  } else if (e.keyCode === 86) { // v
    img.src = "right_hand_clicked.jpg"
    Fhigh.src = './sound/ฟาสูง.mp3'
    Fhigh.play()
  } else if (e.keyCode === 66) { // b
    img.src = "left_hand_clicked.jpg"
    Ghigh.src = './sound/ซอลสูง.mp3'
    Ghigh.play()
  } else if (e.keyCode === 78) { // n
    img.src = "right_hand_clicked.jpg"
    Ahigh.src = './sound/ลาสูง.mp3'
    Ahigh.play()
  } else if (e.keyCode === 77) { // m
    img.src = "left_hand_clicked.jpg"
    Bhigh.src = './sound/ทีสูง.mp3'
    Bhigh.play()
  }
}

