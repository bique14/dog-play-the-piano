var socket = io.connect();
const containerKey = document.getElementById("keys-flex");

const keys = [ "c-", "db-", "d-", "eb-", "e-", "f-", "gb-", "g-", "ab-", "a-", "bb-", "b-", "c", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b", "c+", "db+", "d+", "eb+", "e+", "f+", "gb+", "g+", "ab+", "a+", "bb+", "b+" ];

const flatKeys = /[a-z]{1}[b]([+|-])?/g;
const afterBlackKeys = /[b|e]{1}([+|-])?/g;
keys.map((k, i) => {
  let buttonKey = document.createElement("li");
  buttonKey.id = k;
  buttonKey.innerHTML = k;

  if (k.match(flatKeys)) {
    buttonKey.className = "black-key";
  } else {
    buttonKey.className = "white-key";
    if (k.match(afterBlackKeys)) {
      buttonKey.style.width = "5rem";
    }
  }

  containerKey.appendChild(buttonKey);
});

const keyElementName = [ "Clow", "DlowB", "Dlow", "ElowB", "Elow", "Flow", "GlowB", "Glow", "AlowB", "Alow", "BlowB", "Blow", "Cmiddle", "DmiddleB", "Dmiddle", "EmiddleB", "Emiddle", "Fmiddle", "GmiddleB", "Gmiddle", "AmiddleB", "Amiddle", "BmiddleB", "Bmiddle", "Chigh", "DhighB", "Dhigh", "EhighB", "Ehigh", "Fhigh", "GhighB", "Ghigh", "AhighB", "Ahigh", "BhighB", "Bhigh" ];
keyElementName.map(function(e, i) {
  window[`${e}`] = document.getElementById(`${keys[i]}`)

  window[`${e}`].addEventListener("click", () => {
    console.log('click!', e)
    socket.emit("type", {
      type: e,
    });
  });
});
