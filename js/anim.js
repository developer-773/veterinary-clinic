
var modall = document.getElementById("mymodal");

var btn = document.getElementById("myBtnn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modall.style.display = "block";
}


span.onclick = function() {
  modall.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modall) {
    modall.style.display = "none";
  }
}
