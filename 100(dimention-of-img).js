//JavaScript Program to Get the Dimensions of an Image
// var img = new Image();
// img.src="C:/Users/Lenovo/Pictures/img.jpg"; 
// img.onload = function() {
//     console.log('width ' + this.width);
//     console.log('height '+ this.height);
//   }
const sizeOf = require('image-size');
const path = require('path');

const imagePath = 'C:/Users/Lenovo/Pictures/img.jpg';

// Retrieve the dimensions of the image
const dimensions = sizeOf(imagePath);

// Display the dimensions
console.log('Width:', dimensions.width);
console.log('Height:', dimensions.height);
