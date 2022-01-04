
const firebaseConfig = {
      apiKey: "AIzaSyAA4Qp3hQhbjceBmmavN8BKw1N2_Ue6Y0M",
      authDomain: "kwitter-8a2a9.firebaseapp.com",
      projectId: "kwitter-8a2a9",
      storageBucket: "kwitter-8a2a9.appspot.com",
      messagingSenderId: "661514273132",
      appId: "1:661514273132:web:f81077a3c17b83775b3349"
    };
  
   firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
