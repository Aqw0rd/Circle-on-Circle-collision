function Ball(){
    this.x = 50;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 1;

    this.update = function(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    } 

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 80, 80);
    }
}