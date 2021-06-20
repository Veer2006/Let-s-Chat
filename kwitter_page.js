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

    user_name= localStorage.getItem("username");
    room_name= localStorage.getItem("room_name");

    function send() {
          message= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: message,
                likes: 0
          });
          document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code 
console.log(firebase_message_id);
console.log(message_data);
name1= message_data['name'];
message= message_data['message'];
likes= message_data['likes'];


name_with_tag="<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag= "<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span> </button><hr> ";
row= name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code

      } });  }); }
getData();

function updatelike(message_id) {
      console.log(message_id);
      button_id=message_id;
      likes1=document.getElementById(button_id).value;
      updates=Number(likes1)+1;
      console.log(updates);
      firebase.database().ref(room_name).child(message_id).update({
            likes: updates
      }) ;  
}
