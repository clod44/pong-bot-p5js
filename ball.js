class Ball {
  constructor(x, y, vel, speedmult, size) {
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.speedmult = speedmult;
    this.size = size;
    this.cornerK;
  }

  update() {
    this.x += this.vel.x * this.speedmult;
    this.y += this.vel.y * this.speedmult;
    this.collision();
  }

  collision() {
    //X collision
    if (this.x + this.size > width || this.x - this.size < 0) {
      this.vel.x *= -1;
      if (this.x - this.size < 0) {
        //check for player 1 score
        if (abs(this.y - pad1.y) < pad1.sizeY / 2 + this.size) {
          let orgMag = this.vel.mag(); //temp mag
          this.vel.y += (this.y - pad1.y) / 10;
          this.vel.setMag(orgMag); //revert it back to previous mag
          this.x += this.vel.x;
          isCalculated = false;
          return;
        }

        score[1] += 1;
        scoreAlpha[0] = 255;
        isCalculated = false;
        this.x = width/2;
        this.y = height/2;
        this.vel = createVector(5,random(-5,5));
      } else {
        //check for player 2 score

        if (abs(this.y - pad2.y) < pad2.sizeY / 2 + this.size) {
          let orgMag = this.vel.mag(); //temp mag
          this.vel.y += (this.y - pad2.y) / 10;
          this.vel.setMag(orgMag); //revert it back to previous mag
          this.x += this.vel.x;
          return;
        }

        score[0] += 1;
        scoreAlpha[1] = 255;
        isCalculated = false;
        this.x = width/2;
        this.y = height/2;
        this.vel = createVector(5,random(-5,5));
      }
      
    }
    //Y collision
    if (this.y + this.size > height || this.y - this.size < 0) {
      this.vel.y *= -1;
    }

    
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size * 2);
  }
}
