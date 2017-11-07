const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:'https://project-62fe6.firebaseio.com/'
})
const dbRef = firebase.database().ref();
const users = dbRef.child('komal');
function writeUserData(name,age, email) 
    {
        return firebase.database().ref().remove(name);
}
writeUserData();