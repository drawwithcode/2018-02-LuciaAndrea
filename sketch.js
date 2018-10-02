function preload(){
  // put preload code here
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(189,250,100);
  angleMode(DEGREES);

  frameRate(120);
}

function draw() {


  translate(width/2, height/2);
rotate(frameCount*9);
  strokeWeight(1);
      noFill();
      var angleOK = frameCount*1;
      var xyeah = 300*cos(angleOK);
      var yyeah= 300*sin(angleOK);

      stroke(lerpColor(color('#ea0043'), color('#000000'), frameCount/60));
     stroke(30, 100, 250);

      line(xyeah,yyeah,120,0);


if(frameCount==240) {
  noLoop();
}







//




   }
