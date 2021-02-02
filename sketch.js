
function setup() {
  createCanvas(800,400);

  mrect = createSprite(400,200,50,50);
  mrect.debug = true ;
  mrect.shapeColor = "blue" ;

  frect = createSprite(200,100,50,50);
  frect.debug = true ;
  frect.shapeColor = "blue" ; 

  object1 = createSprite(100,50,50,50);
  object1.debug = true ;
  object1.shapeColor = "blue" ; 

  object2 = createSprite(600,350,50,50);
  object2.debug = true ;
  object2.shapeColor = "blue" ; 


  object3 = createSprite(700,250,50,50);
  object3.debug = true ;
  object3.shapeColor = "blue" ; 

  object4 = createSprite(500,150,50,50);
  object4.debug = true ;
  object4.shapeColor = "blue" ; 


}

function draw() {
  background("yellow");  

 mrect.x = mouseX;
 mrect.y = mouseY;
 

 if(isTouching(mrect,object1)||isTouching(mrect,object2)||
 isTouching(mrect,object3)||isTouching(mrect,object4)||
 isTouching(mrect,frect)){
mrect.shapeColor = "black"
 }else{
   mrect.shapeColor = "blue";
 }
 
 drawSprites();
}
