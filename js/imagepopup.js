// Attach onClick to each images
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) (function(i){ 
  images[i].onclick = function() {
      document.getElementById("enlarged-image").src = this.src;
      document.getElementById("image-modal").style.display = "block";
  }
})(i);

// Close modal
$("#close").onclick = function() {
  $("#image-modal").style.display = "none";
}
