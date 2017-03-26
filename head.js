function Head(){
    this.x = 640/2;
    this.y=480;
    this.xspeed = 0;

    this.update = function(){
        this.x = this.x + this.xspeed;
    } 

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 80, 80);
    }
}