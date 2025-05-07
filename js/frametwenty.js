let images = [];
let imageIndex = 0;
let hasClicked = false;

function setup() {
  createCanvas(1440, 1024);

  // Load video files
  images[0] = createVideo('img/Sequence 01.mp4');
  images[1] = createVideo('img/Sequence 02.mp4');
  images[2] = createVideo('img/Sequence 03.mp4');
  images[3] = createVideo('img/Sequence 041.mp4');
  images[4] = createVideo('img/Sequence 051.mp4');
  images[5] = createVideo('img/Sequence 061.mp4');

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
