let isCalculated = false;
class Pad{
  constructor(x,y,sizeX,sizeY,speed){
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.speed = speed;
    this.desiredY = height/2;  
    
    //ai stuff
    this.Xdist = 0;
    this.Ydist = 0;
    this.balldesiredY = 0;
  }
  
  
  calculate(){ 
    if(!isCalculated){
       isCalculated = true;
       this.Xdist = this.x - ball.x;
       this.balldesiredY = ball.y + ((this.Xdist * ball.vel.y)/ball.vel.x);

      //calculate balldesiredY like its not reflected throu top/bottom walls
      let i = 0;
       while((this.balldesiredY < 0 || this.balldesiredY > height) 
             && i<10){
         i++;
         if(this.balldesiredY > height){
           this.balldesiredY = height-this.balldesiredY+height; 
         }else if (this.balldesiredY < 0 ){
           this.balldesiredY *= -1;
         }
       }       
      this.desiredY = this.balldesiredY;
    }
    
  }
  
  
  
  
  update(){
    //move towards desiredY
    if(this.desiredY >= this.y){
      this.y = min(this.y + this.speed, this.desiredY);
    }else{
      this.y = max(this.y - this.speed, this.desiredY);  
    }
  }
  
  
  
  
  
  show(){
    noStroke();
    fill(255);
    rect(this.x-this.sizeX/2,
         this.y-this.sizeY/2,
         this.sizeX,
         this.sizeY);
  }
  
  
}