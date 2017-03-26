var gravity = 0.1;

function setup() {
  createCanvas(640, 480);
  ball = new Ball();
  head = new Head();
}

this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
}

function draw() {
    background(51);
    ballMovement();
    collision();
    ball.update();
    head.update();
    ball.show();
    head.show();
    
}

function ballMovement() {
    ball.yspeed = ball.yspeed + gravity;
}

function collision() {
    var dx = ball.x - head.x;
    var dy = ball.y - head.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var n = createVector(dx/dist,dy/dist);

    if(ball.y+50 >= 480){
        ball.yspeed = ball.yspeed*-1;
    }
    if((ball.x-40)<=0 || ball.x+40>=640){
      ball.xspeed = ball.xspeed *-1;
    }   

    if(dist <= 80){
      var dot = ball.xspeed * dx + ball.yspeed * dy;
      var bLen = Math.sqrt(ball.xspeed * ball.xspeed + ball.yspeed * ball.yspeed);
      var a = dot/(dist*bLen);
      var u = Math.acos(a);
      var oldSpeed = createVector(ball.xspeed, ball.yspeed);
      var rx = ball.xspeed - 2*(ball.xspeed*n.x + ball.yspeed*n.y)*n.x;
      var ry = ball.yspeed - 2*(ball.xspeed*n.x + ball.yspeed*n.y)*n.y;
      ball.yspeed = ry;
      ball.xspeed = rx;
  }

}

function keyPressed() {
  if (keyCode === 65) { //A
    head.xspeed = -5;
  } 
  if (keyCode === 68) {  //D
    head.xspeed = 5;
  }
}

function keyReleased(){
  if (keyCode === 65) {
    head.xspeed = 0;
  } 
  if (keyCode === 68) {
    head.xspeed = 0;
  }
}

