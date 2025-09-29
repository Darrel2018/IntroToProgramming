// STYLING USE JAVASCRIPT
document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-20deg)";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "20px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF0000";
document.getElementById("body").style.color = "blue";
document.getElementById("head").style.borderTop = "10px yellow solid";

// EXERCISES
document.getElementById("nose").style.borderRadius = "10px";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";

// ANIMATING THE ROBOT
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10);

  function frame() {
    robotPart.style.top = top + '%';
    top++;
    if(top === 20) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;

  var id = setInterval(frame, 10);

  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if(left === 70) {
      clearInterval(id);
    }
  }
}
