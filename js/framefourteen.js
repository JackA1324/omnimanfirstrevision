let bgVideo;
let myFont;
let showSecondText = false;
let zoomFactor = 1.0;  //starting zoom factor
let zoomTarget = 1.0;  //target zoom factor (changes when mouse enters top right)
let zoomSpeed = 0.05;  //speed of zoom transition

function preload() {
  bgVideo = createVideo('img/frame13.mp4');
  myFont = loadFont('font/KdamThmorPro-Regular.ttf');
}

function setup() {
  createCanvas(1440, 1024);
  bgVideo.hide();
  textFont(myFont);
  textSize(64);
  textAlign(LEFT, LEFT);
  fill(0);
}

function draw() {
  if (bgVideo.duration()) {
//google ai overview helped me find this cool function called scrubTime. It maps where the mouse is and changes my bgVideo duration as the mouse grazes the screen.
    let scrubTime = map(mouseX, 0, width, 0, bgVideo.duration());
    scrubTime = constrain(scrubTime, 0, bgVideo.duration());
    bgVideo.time(scrubTime);
  }

  // Check if the mouse is in the right half of the screen
  let isMouseInRightHalf = mouseX > width / 2;

  // Update zoom target when the mouse enters the right half
  if (isMouseInRightHalf && zoomFactor < 1.1) {
    zoomTarget = 1.1;
  } else if (!isMouseInRightHalf && zoomFactor > 1.0) {
    zoomTarget = 1.0;
  }

  // Smoothly interpolate zoomFactor toward the target
  zoomFactor += (zoomTarget - zoomFactor) * zoomSpeed;


  push();
  translate(width / 2, height / 2);
  scale(zoomFactor);
  imageMode(CENTER);
  image(bgVideo, 0, 0, width, height);
  pop();



}

