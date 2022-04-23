
var firebaseConfig = {
    apiKey: "AIzaSyAHi2qZ5Gkn2uNAo0bTn1aV1hiARzf1AF4",
    authDomain: "kwitter-d8461.firebaseapp.com",
    databaseURL: "https://kwitter-d8461-default-rtdb.firebaseio.com",
    projectId: "kwitter-d8461",
    storageBucket: "kwitter-d8461.appspot.com",
    messagingSenderId: "280451573806",
    appId: "1:280451573806:web:e609b03103779c44f957bf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
