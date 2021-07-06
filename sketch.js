let ball;
let pad1;
let pad2;
let score = [0,0];
let scoreAlpha = [0,0];


function setup() {
  createCanvas(700, 500);
  //ballx,bally,vel,speedmult,r
  ball = new Ball(width/2,height/2,createVector(5,random(-5,5)),1,10);
  //user has infinite moving speed
  pad1 = new Pad(0,height/2, 20, 70, 9999);
  //AI has limited
  pad2 = new Pad(width,height/2, 20, 70, 10);
  
  makeInterface();
  frameRate(30);
}

function draw() {
  background(0,0,0,150);
  
  //score
  textSize(24);
  fill(255);
  text("score: "+score[0]+" - "+score[1],10,30);
  
  
  //pads
  pad1.desiredY = mouseY;
  pad1.update();
  pad1.show();
  pad2.speed = aispeedSlider.value();
  pad2.calculate();
  pad2.update();
  pad2.show();
  
  //ball
  ball.speedmult = ballspeedSlider.value()/100.0;
  ball.update();
  ball.show();
  
  
  scoreIndicators();
}


function scoreIndicators(){
  fill(255,0,0,scoreAlpha[0]);
  rect(0,0,5,height);
  fill(0,255,0,scoreAlpha[1]);
  rect(width-5,0,5,height);
  
  scoreAlpha[0] /= 1.3;
  scoreAlpha[1] /= 1.3;
  
}