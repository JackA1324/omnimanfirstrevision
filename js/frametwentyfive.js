let images = [];
let imageIndex = 0;
let hasClicked = false;

function setup() {
  createCanvas(1440, 1024);

  // Load video files
  images[0] = createVideo('img/final page.mp4');


  for (let i = 0; i < images.length; i++) {
    images[i].hide();
    images[i].stop();
  }

  // Automatically play the first video as the opening
  images[imageIndex].play();
}

function draw() {
  background(0);
  image(images[imageIndex], 0, 0, width, height);
}

function mouseClicked() {
  if (!hasClicked) {
    hasClicked = true;
  } else {
    images[imageIndex].stop(); // Stop current video
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].play(); // Play next
  }
}
