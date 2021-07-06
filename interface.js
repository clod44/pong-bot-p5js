
let ballspeed = 1;
let ballspeedSlider;
let aispeed = 10;
let aispeedSlider;

function makeInterface() {
  //one time computing
  //Sliders and texts
  let x = 10;
  let y = height + 10;
  let xoff = 0;
  let yoff = 10;
  let margin = 25;
  let msg; //init
  
  
  
  ballspeedSlider = createSlider(0, 1000, 100); //ball speed
  ballspeedSlider.position(x + xoff, y + yoff);
  ballspeedSlider.style("width", "260px");
  msg = createP("Ball Speed Multiplier(0,10)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  
  aispeedSlider = createSlider(1, 50, 10); //ai speed
  aispeedSlider.position(x + xoff, y + yoff);
  aispeedSlider.style("width", "260px");
  msg = createP("ai speed(1,50)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  
  
  /*
  TEMPLATES
  
  
  SLIDER WITH TEXT:
  
  Slider = createSlider(0, 100, 0); //desc
  Slider.position(x + xoff, y + yoff);
  Slider.style("width", "260px");
  msg = createP("text text");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  
  BUTTON:
  
  Button = createButton("text");//desc
  Button.position(x, y + yoff);
  Button.style("width", "260px");
  Button.mousePressed(doThermal);
  //xoff += margin;
  yoff += margin;
  
  
  LABEL:
  var msg = createP("text text");//desc
  msg.style("color", "#9b9b9b");
  msg.position(x, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  */
}