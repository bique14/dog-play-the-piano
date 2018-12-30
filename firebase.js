// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1iADUPnUF7OiDwA7mfcleOqzLbDRpKis",
  authDomain: "dog-play-the-piano.firebaseapp.com",
  databaseURL: "https://dog-play-the-piano.firebaseio.com",
  projectId: "dog-play-the-piano",
  storageBucket: "",
  messagingSenderId: "78968550181"
};
firebase.initializeApp(config);

var database = firebase.database();

//create a variable to hold our orders list from firebase
var lyricList = database.ref().child('lyrics');

lyricList.on('value', snapshot => {
  console.log(snapshot.val())
})
