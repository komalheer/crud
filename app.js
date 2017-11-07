const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:'https://project-62fe6.firebaseio.com/'
})
const dbRef = firebase.database().ref();
const users = dbRef.child('komal');
function writeUserData(age, email) {
  firebase.database().ref('users/').set({
    age:23,
    email:'swan'
  });
}
writeUserData();