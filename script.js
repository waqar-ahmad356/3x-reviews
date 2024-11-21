// Select all images
const images = document.querySelectorAll('.image');

let currentIndex = 0; // Start with the first image
images[currentIndex].classList.add('active');
// Function to change the active image
function changeImage() {
  // Remove the 'active' class from the current image
  images[currentIndex].classList.remove('active');

  // Increment the index
  currentIndex = (currentIndex + 1) % images.length;

  // Add the 'active' class to the next image
  images[currentIndex].classList.add('active');
}

// Start the image change interval
setInterval(changeImage, 1500); // Change image every 1 second
