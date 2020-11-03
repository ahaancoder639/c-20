var rectangle;
var rectangle2;







function setup() {
  createCanvas(800,400);
  rectangle = createSprite(400,200,50,50);
  rectangle2 = createSprite(200,300,50,50);
}

function draw() {
  background("black");  
  
  
  rectangle.x = mouseX;
  rectangle.y = mouseY;
  
  
  if(rectangle.isTouching(rectangle2)){
rectangle2.shapeColor = "red";
rectangle.shapeColor = "red";




  }
  else{
    rectangle2.shapeColor = "gray";
    rectangle.shapeColor = "gray";
    


  }
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();







}