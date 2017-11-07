//update using update

const firebase = require('firebase');
firebase.initializeApp({
  databaseURL:'https://project-62fe6.firebaseio.com/'
})

const dbRef = firebase.database().ref();
const users = dbRef.child('komal');


function writeUserData(name,age, email) {
    return firebase.database().ref('komal').orderByChild("name").equalTo("swan").once("value",function(komal)
        {
             komal.forEach(function(user) 
                 {
                      user.ref.child("name").update({
                        name:"stuart"
                      })
                  });
          })
}

writeUserData();