const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:'https://project-62fe6.firebaseio.com/'
})
const dbRef = firebase.database().ref();
const users = dbRef.child('komal');
var database = firebase.database();
function writeUserData(name,age, email) 
{
   var key =dbRef.child('komal').push().key;
    database.ref('komal/'+key+'/name').set('swan');
    database.ref('komal/'+key+'/age').set('23');
    database.ref('komal/'+key+'/email').set('swan@gmail.com');
  };
writeUserData();
    
   