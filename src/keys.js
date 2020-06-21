const soundFiles = [ "./sound/โดต่ำ.mp3", "./sound/เรต่ำ.mp3", "./sound/มีต่ำ.mp3", "./sound/ฟาต่ำ.mp3", "./sound/ซอลต่ำ.mp3", "./sound/ลาต่ำ.mp3", "./sound/ทีต่ำ.mp3", "./sound/โด.mp3", "./sound/เร.mp3", "./sound/มี.mp3", "./sound/ฟา.mp3", "./sound/ซอล.mp3", "./sound/ลา.mp3", "./sound/ที.mp3", "./sound/โดสูง.mp3", "./sound/เรสูง.mp3", "./sound/มีสูง.mp3", "./sound/ฟาสูง.mp3", "./sound/ซอลสูง.mp3", "./sound/ลาสูง.mp3", "./sound/ทีสูง.mp3", "./sound/เรต่ำb.mp3", "./sound/มีต่ำb.mp3", "./sound/ซอลต่ำb.mp3", "./sound/ลาต่ำb.mp3", "./sound/ทีต่ำb.mp3", "./sound/เรb.mp3", "./sound/มีb.mp3", "./sound/ซอลb.mp3", "./sound/ลาb.mp3", "./sound/ทีb.mp3", "./sound/เรสูงb.mp3", "./sound/มีสูงb.mp3", "./sound/ซอลสูงb.mp3", "./sound/ลาสูงb.mp3", "./sound/ทีสูงb.mp3" ];

// Prepare sound files
window.addEventListener("load", async () => {
  console.log("page loaded");
  try {
    soundFiles.map(async s => {
      await loadFileAsync(s)
    })
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Everything loaded");
  }
});

const loadFileAsync = (url) => {
  return new Promise((resolve, reject) => {
    if (url) {
      let script = document.createElement("audio");
      script.src = url;
      document.body.appendChild(script);
      resolve(true);
    } else {
      reject(false);
    }
  });
};

// Create audio tag
const keys = [ "play", "c-", "d-", "db-", "e-", "eb-", "f-", "g-", "gb-", "a-", "ab-", "b-", "bb-", "c", "d", "db", "e", "eb", "f", "g", "gb", "a", "ab", "b", "bb", "c+", "d+", "db+", "e+", "eb+", "f+", "g+", "gb+", "a+", "ab+", "b+", "bb+" ];
keys.map(k => {
  let audio = document.createElement("audio");
  audio.id = k;
  audio.src = "sound/default.m4a";
  document.body.appendChild(audio);
})

// Create get element by ID
const keyElementName = [ "img", "sound", "Clow", "Dlow", "DlowB", "Elow", "ElowB", "Flow", "Glow", "GlowB", "Alow", "AlowB", "Blow", "BlowB", "Cmiddle", "Dmiddle", "DmiddleB", "Emiddle", "EmiddleB", "Fmiddle", "Gmiddle", "GmiddleB", "Amiddle", "AmiddleB", "Bmiddle", "BmiddleB", "Chigh", "Dhigh", "DhighB", "Ehigh", "EhighB", "Fhigh", "Ghigh", "GhighB", "Ahigh", "AhighB", "Bhigh", "BhighB" ]
const keyElement = ["dog", ...keys]

const zip = keyElementName.map(function(e, i) {
  return [e, keyElement[i]];
});

zip.map(z => {
  window[`${z[0]}`] = document.getElementById(`${z[1]}`)
})

var sounds = {
  81: "./sound/โดต่ำ.mp3", // q
  87: "./sound/เรต่ำ.mp3", // w
  69: "./sound/มีต่ำ.mp3", // e
  82: "./sound/ฟาต่ำ.mp3", // r
  84: "./sound/ซอลต่ำ.mp3", // t
  89: "./sound/ลาต่ำ.mp3", // y
  85: "./sound/ทีต่ำ.mp3", // u

  65: "./sound/โด.mp3", // a
  83: "./sound/เร.mp3", // s
  68: "./sound/มี.mp3", // d
  70: "./sound/ฟา.mp3", // f
  71: "./sound/ซอล.mp3", // g
  72: "./sound/ลา.mp3", // h
  74: "./sound/ที.mp3", // j

  90: "./sound/โดสูง.mp3", // z
  88: "./sound/เรสูง.mp3", // x
  67: "./sound/มีสูง.mp3", // c
  86: "./sound/ฟาสูง.mp3", // v
  66: "./sound/ซอลสูง.mp3", // b
  78: "./sound/ลาสูง.mp3", // n
  77: "./sound/ทีสูง.mp3", // m
};

document.onkeydown = function (e) {
  var soundId = sounds[e.keyCode];
  if (e.shiftKey && e.keyCode === 87) {
    // w
    img.src = randomHand();
    DlowB.src = './sound/เรต่ำb.mp3'
    DlowB.play();
  } else if (e.shiftKey && e.keyCode === 69) {
    // e
    img.src = randomHand();
    ElowB.src = './sound/มีต่ำb.mp3';
    ElowB.play();
  } else if (e.shiftKey && e.keyCode === 84) {
    // t
    img.src = randomHand();
    GlowB.src = './sound/ซอลต่ำb.mp3'
    GlowB.play();
  } else if (e.shiftKey && e.keyCode === 89) {
    // y
    img.src = randomHand();
    AlowB.src = './sound/ลาต่ำb.mp3'
    AlowB.play();
  } else if (e.shiftKey && e.keyCode === 85) {
    // u
    img.src = randomHand();
    BlowB.src = './sound/ทีต่ำb.mp3'
    BlowB.play();
  } else if (e.shiftKey && e.keyCode === 83) {
    // s
    img.src = randomHand();
    DmiddleB.src = './sound/เรb.mp3'
    DmiddleB.play();
  } else if (e.shiftKey && e.keyCode === 68) {
    // d
    img.src = randomHand();
    EmiddleB.src = './sound/มีb.mp3'
    EmiddleB.play();
  } else if (e.shiftKey && e.keyCode === 71) {
    // g
    img.src = randomHand();
    GmiddleB.src = './sound/ซอลb.mp3'
    GmiddleB.play();
  } else if (e.shiftKey && e.keyCode === 72) {
    // h
    img.src = randomHand();
    AmiddleB.src = './sound/ลาb.mp3'
    AmiddleB.play();
  } else if (e.shiftKey && e.keyCode === 74) {
    // j
    img.src = randomHand();
    BmiddleB.src = './sound/ทีb.mp3'
    BmiddleB.play();
  } else if (e.shiftKey && e.keyCode === 88) {
    // x
    img.src = randomHand();
    DhighB.src = './sound/เรสูงb.mp3'
    DhighB.play();
  } else if (e.shiftKey && e.keyCode === 67) {
    // c
    img.src = randomHand();
    EhighB.src = './sound/มีสูงb.mp3'
    EhighB.play();
  } else if (e.shiftKey && e.keyCode === 66) {
    // b
    img.src = randomHand();
    GhighB.src = './sound/ซอลสูงb.mp3'
    GhighB.play();
  } else if (e.shiftKey && e.keyCode === 78) {
    // n
    img.src = randomHand();
    AhighB.src = './sound/ลาสูงb.mp3'
    AhighB.play();
  } else if (e.shiftKey && e.keyCode === 77) {
    // m
    img.src = randomHand();
    BhighB.src = './sound/ทีสูงb.mp3'
    BhighB.play();
  } else if (e.keyCode === 81) {
    // q
    img.src = randomHand();
    Clow.src = soundId;
    Clow.play();
  } else if (e.keyCode === 87) {
    // w
    img.src = randomHand();
    Dlow.src = soundId;
    Dlow.play();
  } else if (e.keyCode === 69) {
    // e
    img.src = randomHand();
    Elow.src = soundId;
    Elow.play();
  } else if (e.keyCode === 82) {
    // r
    img.src = randomHand();
    Flow.src = soundId;
    Flow.play();
  } else if (e.keyCode === 84) {
    // t
    img.src = randomHand();
    Glow.src = soundId;
    Glow.play();
  } else if (e.keyCode === 89) {
    // y
    img.src = randomHand();
    Alow.src = soundId;
    Alow.play();
  } else if (e.keyCode === 85) {
    // u
    img.src = randomHand();
    Blow.src = soundId;
    Blow.play();
  } else if (e.keyCode === 65) {
    // a
    img.src = randomHand();
    Cmiddle.src = soundId;
    Cmiddle.play();
  } else if (e.keyCode === 83) {
    // s
    img.src = randomHand();
    Dmiddle.src = soundId;
    Dmiddle.play();
  } else if (e.keyCode === 68) {
    // d
    img.src = randomHand();
    Emiddle.src = soundId;
    Emiddle.play();
  } else if (e.keyCode === 70) {
    // f
    img.src = randomHand();
    Fmiddle.src = soundId;
    Fmiddle.play();
  } else if (e.keyCode === 71) {
    // g
    img.src = randomHand();
    Gmiddle.src = soundId;
    Gmiddle.play();
  } else if (e.keyCode === 72) {
    // h
    img.src = randomHand();
    Amiddle.src = soundId;
    Amiddle.play();
  } else if (e.keyCode === 74) {
    //  j
    img.src = randomHand();
    Bmiddle.src = soundId;
    Bmiddle.play();
  } else if (e.keyCode === 90) {
    // z
    img.src = randomHand();
    Chigh.src = soundId;
    Chigh.play();
  } else if (e.keyCode === 88) {
    // x
    img.src = randomHand();
    Dhigh.src = soundId;
    Dhigh.play();
  } else if (e.keyCode === 67) {
    // c
    img.src = randomHand();
    Ehigh.src = soundId;
    Ehigh.play();
  } else if (e.keyCode === 86) {
    // v
    img.src = randomHand();
    Fhigh.src = soundId;
    Fhigh.play();
  } else if (e.keyCode === 66) {
    // b
    img.src = randomHand();
    Ghigh.src = soundId;
    Ghigh.play();
  } else if (e.keyCode === 78) {
    // n
    img.src = randomHand();
    Ahigh.src = soundId;
    Ahigh.play();
  } else if (e.keyCode === 77) {
    // m
    img.src = randomHand();
    Bhigh.src = soundId;
    Bhigh.play();
  }
};

function randomHand() {
  const random = Math.floor(Math.random() * 10);
  return random % 2 == 0 ? "images/right_hand_clicked.jpg" : "images/left_hand_clicked.jpg"
}