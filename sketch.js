var canvas;
var music;
var rect1, rect2, rec3, rect4, square ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    rect1 = createSprite(100, 550, 120, 50);
    rect1.shapeColor = "green";
    rect1.debug = true;
    rect2 = createSprite(300, 550,120,50);
    rect2.shapeColor = "red";
    rect2.debug = true;
    rect3 = createSprite(500, 550,120,50);
    rect3.shapeColor = "yellow";
    rect3.debug = true; 
    rect4 = createSprite(700, 550,120,50);
    rect4.shapeColor = "blue";
    rect4.debug = true; 
    square = createSprite(random(20,750),400, 200,50,50);
    square.shapeColor = "white";
    square.debug = true; 
    square.velocityX=3;
    square.velocityY=3;
    
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();

square.bounce(rect1);
square.bounce(rect3);
square.bounce(rect2);
square.bounce(rect4);

if (square.isTouching(rect1)){
square.shapeColor = "green"
music.play()
}

if (square.isTouching(rect2)){
    square.shapeColor = "red"
    music.play()
    
    }
    if (square.isTouching(rect3)){
        square.shapeColor = "yellow"
        music.play()
        }
        if (square.isTouching(rect4)){
            square.shapeColor = "blue"
            music.play()
            }



                        

    //add condition to check if box touching surface and make it box

    
}
