// Get all img elements on the webpage
var images = document.getElementsByTagName("img");

// Create an array to store the image URLs
var imageUrls = [];

// Iterate through the images and collect their src attributes
for (var i = 0; i < images.length; i++) {
  var imageSrc = images[i].src;
  imageUrls.push(imageSrc);
}

// Create a new tab with all the images as links
var newTab = window.open("");
imageUrls.forEach(function (imageUrl) {
  newTab.document.write("<a href='" + imageUrl + "' target='_blank'><img src='" + imageUrl + "' /></a><br>");
});
