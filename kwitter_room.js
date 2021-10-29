var firebaseConfig = {
    apiKey: "AIzaSyBRu1obGiZCH8wruAc5BQh8-f7Vc-FCo1s",
    authDomain: "kwitter-a6a68.firebaseapp.com",
    databaseURL: "https://kwitter-a6a68-default-rtdb.firebaseio.com",
    projectId: "kwitter-a6a68",
    storageBucket: "kwitter-a6a68.appspot.com",
    messagingSenderId: "740631574094",
    appId: "1:740631574094:web:8eadd0b4407337558e351f",
    measurementId: "G-7FNQVHL5SC"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
