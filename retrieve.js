const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:'https://project-62fe6.firebaseio.com/'
})
const dbRef = firebase.database().ref();
const users = dbRef.child('komal');
const database=firebase.database();
function writeUserData(name,age, email) {
    database.ref().child('komal').once('value').then(function(komal)
        {
            console.log(komal.val()); 
        });
}
writeUserData();
