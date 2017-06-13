// Attach onClick to each images
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) (function(i){ 
  images[i].onclick = function() {
      $("#enlarged-image").attr("src", this.src);
  }
})(i);
