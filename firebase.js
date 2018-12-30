// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1iADUPnUF7OiDwA7mfcleOqzLbDRpKis",
  authDomain: "dog-play-the-piano.firebaseapp.com",
  databaseURL: "https://dog-play-the-piano.firebaseio.com",
  projectId: "dog-play-the-piano",
  storageBucket: "",
  messagingSenderId: "78968550181"
}

firebase.initializeApp(config)
var database = firebase.database()

var buttons = document.getElementsByTagName('button')

$('button').click(function () {
  const id = this.id
  console.log(id)

  var lyricList = database.ref().child('lyrics')
  lyricList.on('value', snapshot => {
    console.log(snapshot.val())
    if (id === 'btn-kuenkampee') {
      const da = lyricList.child(`da-endrophine/คืนข้ามปี`)
      da.on('value', snapshot => {
        const result = snapshot.val().replace(/\s+/g, '\n')
        $("#lyric").html(result)
      })
    }
  })
});

