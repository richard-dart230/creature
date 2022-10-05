let shinyX = -300;
let shinyY = -50;

let spikeX = 125;

let crabY = 0;
let crabSpeed = 0.3;
let crabDirection = 1;

let shadowSizeX = 0;
let shadowSizeY = 0;
let shadowSpeedX = 0.15;
let shadowSpeedY = 0.15;
let shadowDirectionX = 1;
let shadowDirectionY = 1;
let shadowVisibility = 0;
let shadowVisSpeed = 0.15;
let shadowVisDirection = 1;

function setup() {
  createCanvas(650, 700);
}

function draw() {
  background(50, 20, 10);
  
  // background layers
  rotate(radians(335));
  fill(255, 150, 0, 15);
  rect(shinyX, shinyY, 150, 600); // animated shiny
  rotate(radians(+25));
  strokeWeight(0);
  fill(207, 96, 16);
  rect(0, 375, 700, 100); // lava
  strokeWeight(5);
  stroke(100, 68, 6);
  fill(120, 98, 26);
  rect(-10, 425, 700); // foreground
  strokeWeight(0);
  fill(95, 37, 6);
  rect(0, 0, 700, 20); // cave top
  
  // animate the shine
  shinyX = shinyX + 10;
  shinyY = shinyY + 1;
  
  // loop the shiny
  if (shinyX > 2200) {
    shinyX = -300;
    shinyY = -50;
  }
  
  // floating stalacite
  strokeWeight(3);
  stroke(225, 150, 100);
  fill(241, 147, 80);
  ellipse(spikeX+575, 395, 65, 15);
  strokeWeight(0);
  fill(102, 70, 30);
  triangle(spikeX+580, 320, spikeX+610, 330, spikeX+570, 420);
  strokeWeight(3);
  stroke(225, 150, 100);
  fill(241, 147, 80);
  arc(spikeX+575, 395, 65, 15, 6, PI + QUARTER_PI);
  fill(207, 96, 16);
  stroke(207, 96, 16);
  rect(spikeX+550, 405, 30, 13);
  
  // animate the floating stalacite
  spikeX = spikeX -4;
  
  // loop the stalacite
  if (spikeX < -1000) {
    spikeX = 125;
  }
  
  // creature shadow
  stroke(0, 0);
  ellipseMode(RADIUS);
  fill(0, shadowVisibility+3);
  ellipse(323, 540, shadowSizeX+160, shadowSizeY+10);
  ellipseMode(CENTER);
  fill(0, shadowVisibility+3);
  ellipse(323, 540, shadowSizeX+200, shadowSizeY+10);
  
  // animate the shadow
  shadowSizeX = shadowSizeX + shadowSpeedX * shadowDirectionX;
  shadowSizeY = shadowSizeY + shadowSpeedY * shadowDirectionY;
  shadowVisibility = shadowVisibility + shadowVisSpeed * shadowVisDirection;
  
  // shadow animation limits
  if (shadowSizeX >= 12.5 || shadowSizeX < 0) {
      shadowDirectionX *= -1;
  }
  if (shadowSizeY >= 12.5 || shadowSizeY < 0) {
      shadowDirectionY *= -1;
  }
  if (shadowVisibility >= 12.5 || shadowVisibility < 0) {
    shadowVisDirection *= -1;
  }
  
  // shadow resets with crab body position in case of desync
  if (crabY <= 0) {
    shadowSizeX = 0;
    shadowSizeY = 0;
    shadowVisibility = 0;
  }
  
  // body shape
  strokeWeight(5);
  stroke(100, 37, 6);
  fill(60, 6, 12);
  ellipse(325, crabY+425, 300, 125);
  
  // mouth lines
  strokeWeight(12);
  stroke(130, 37, 6);
  line(225, crabY+425, 250, crabY+440);
  line(250, crabY+440, 285, crabY+515);
  
  line(425, crabY+425, 400, crabY+440);
  line(400, crabY+440, 360, crabY+515);
  
  // leg lines
  strokeWeight(8);
  stroke(100, 37, 6);
  line(175, crabY+425, 125, 455);
  line(125, 455, 75, 555);
  
  line(475, crabY+425, 525, 455);
  line(525, 455, 575, 555);
  
  line(250, crabY+480, 220, 505);
  line(220, 505, 200, 555);
  
  line(400, crabY+480, 430, 505);
  line(430, 505, 450, 555);
  
  // neck lines
  strokeWeight(6);
  line(250, crabY+370, 200, crabY+300);
  line(325, crabY+362, 325, crabY+280);
  line(400, crabY+370, 450, crabY+300);
  
  // eyeball shapes
  strokeWeight(8);
  fill(200);
  ellipse(180, crabY+280, 75);
  ellipse(325, crabY+255, 75);
  ellipse(465, crabY+275, 75);
  
  // iris shapes
  strokeWeight(2);
  stroke(100);
  fill(0);
  ellipse(190, crabY+290, 25);
  ellipse(325, crabY+265, 25);
  ellipse(455, crabY+285, 25);
  
  // animate the crab
  crabY = crabY + crabSpeed * crabDirection;
  
  // crab animation limits
  if (crabY >= 25 || crabY <= 0) {
    crabDirection *= -1;
  }
  
  // foreground rocks
  fill(98, 86, 48);
  strokeWeight(4);
  stroke(100, 68, 6);
  rect(10, 600, 100, 85, 40, 30, 20, 40);
  triangle(130, 640, 150, 690, 110, 690);
  rect(100, 680, 25, 12, 5);
  triangle(580, 520, 630, 580, 530, 580);
  triangle(570, 560, 600, 590, 540, 590);
  
  // stalactites
  fill(102, 70, 30);
  strokeWeight(0);
  triangle(15, 18, 50, 18, 33, 120);
  triangle(45, 18, 60, 18, 53, 60);
  triangle(250, 18, 270, 18, 260, 50);
  triangle(450, 18, 500, 18, 475, 150);
  triangle(490, 18, 520, 18, 500, 100);
  triangle(595, 18, 645, 18, 620, 200);
}