let bgVideo;
let myFont;
let videoStarted = false;

function preload() {
  bgVideo = createVideo('img/Sequence 07.mp4');
  myFont = loadFont('font/KdamThmorPro-Regular.ttf');
}

function setup() {
  createCanvas(1440, 1024);
  bgVideo.hide();
  bgVideo.volume(0.3); // Set volume properly
  textFont(myFont);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(0);
  if (videoStarted) {
    image(bgVideo, 0, 0, width, height);
  } else {
    text("Can He?\nWhat About His Mission\nCan He Sacrafice His Mission For His Family?\nFor His Son?", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!videoStarted) {
    bgVideo.play();
    videoStarted = true;
  }
}
