
function setup() {
  createCanvas(800,400);
hr = hour();
 mn = minute();
 sc = second();

 

}

function draw() {
  background(255,255,255);  
  
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 60, 0, 360)

  push();
  //translate(0,0)
  translate(scAngle,mnAngle, hrAngle )
  angleMode(DEGREES);
  
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
rotate(scAngle);
  
  rotate(mnAngle);
  strokeWeight(7);
stroke(255, 204, 100);
  line(0,0,100,0);
  
  

  rotate(hrAngle);

  stroke(255, 404, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
}

