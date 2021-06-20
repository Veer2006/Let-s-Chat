
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBNxbgkN6dJJwJh0RXzOoAcAnkitMsbZX8",
      authDomain: "doctor-and-patient-chat-ec56c.firebaseapp.com",
      databaseURL: "https://doctor-and-patient-chat-ec56c.firebaseio.com",
      projectId: "doctor-and-patient-chat-ec56c",
      storageBucket: "doctor-and-patient-chat-ec56c.appspot.com",
      messagingSenderId: "866526094312",
      appId: "1:866526094312:web:31e33cb8e46daeeba5ba5d",
      measurementId: "G-G40EY07H3B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    userwelcome= localStorage.getItem("username");
    console.log(userwelcome);

    document.getElementById("user_name").innerHTML="Hello " + userwelcome;

    function addroom() {
          roomname= document.getElementById("room_name").value;
          console.log(roomname);
          firebase.database().ref("/").child(roomname).update({
                purpose: "adding-roomname"
          });
          localStorage.setItem("room_name ", roomname)
          window.location="kwitter_page.html";
          }
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomnames= " + Room_names)
       row= "<div class='room_name' id='"+Room_names+"' onclick='redirect_toroomname(this.id)'>#"+Room_names+"</div> <hr><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirect_toroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";    
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}



