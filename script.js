function showMessage(message) {
  var id = message;
  document.getElementById(id).style.color = "#F0C3D6";
}

// window.onload = function intro() {
//   // alert("test");
//   setInterval(showMessage("intro"), 20000);
//   setInterval(showMessage("greeting"), 100000);
// }

// function type() {
//   var message = "test";
//   var speed = 50;
//   for (var i = 0; i < message.length; i++) {
//     document.getElementById("placeholder").innerHTML += message.charAt(i);
//     setTimeout(type, speed);
//   }
// }

function showIntro() {
  document.getElementById("intro").style.color = "#F0C3D6";
  // var message = document.getElementById("intro");"
  // var message = "test";
  type();
}

function showGreeting() {
  document.getElementById("greeting").style.color = "#F0C3D6";
}

window.onload = function intro() {
  setInterval(showIntro, 500);
  setInterval(showGreeting, 2500);
}

// var message = "test";
// var speed = 50;
//
// function type() {
//   for (var i = 0; i < message.length; i++) {
//     document.getElementById("placeholder").innerHTML += message.charAt(i);
//     setTimeout(type, speed);
//   }
// }
//
// type();
