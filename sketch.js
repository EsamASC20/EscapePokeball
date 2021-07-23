let xPos = 150;
let xPos2 = 150;
let xPos3 = 150;
let xPos4 = 150;
let direction = 1;
let direction2 = 1;
let direction3 = 1;
let myXPos = 100;
let myYPos = 100;
let enXPos = 1200;
let enYPos = 500;

let myLeft, myRight, myTop, myBottom; 
let enLeft, enRight, enTop, enBottom; 

let Charmander; 

function preload() {
Charmander = loadImage("images_and_sounds/images/charmander.png");
}


function setup() {
    createCanvas(1250, 570);
    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(0);

    //  Safe Zone
    fill(0,255,0, 110);
    rect(0,0,200,1250)
    // Safe Zone 2
    fill(0,255,0, 110);
    rect(1200,0,200,1250)
    


    //Enemy  Circle1
    fill(255,0,0);
    ellipse(xPos,50,50,50);
// speed
    xPos += 3 * direction;

    if(xPos < 150 || xPos>1100){
         direction*= -1;
    }
    
    //Enemy  Circle 2
    fill(255,0,0);
    ellipse(xPos2,150,50,50);
// speed
    xPos2 += 3 * direction;

    if(xPos2 < 150 || xPos2>1100){
         direction*= -1;
    }

    //Enemy  Circle3
    fill(255,0,0);
    ellipse(xPos3,270,50,50);
// speed
    xPos3 += 3 * direction;

    if(xPos3 < 150 || xPos3>1100){
         direction*= -1;
    }
    //Enemy  Circle4
    fill(255,0,0);
    ellipse(xPos4,400,50,50);
// speed
    xPos4 += 3 * direction;

    if(xPos4 < 150 || xPos4>1100){
         direction*= -1;
    }

    // blue end goal Box
    fill(0, 0, 255);
    rect(enXPos, enYPos, 50, 50);

    // Player Box
    fill(100, 50, 255);
    image(Charmander,myXPos, myYPos, 55, 55);
    
    

    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }

    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }

    
    
    fill(255)
    textSize(22)
    text("Escape the Pokeball!", 575, 45)
    // Self Collision 

    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;
    
    // Enemy Collision 
    enLeft = enXPos - 25;
    enRight = enXPos + 25;
    enTop = enYPos - 25;
    enBottom = enYPos + 25;

    if (myLeft > enRight || myRight < enLeft || myTop > enBottom || myBottom < enTop){
        fill(255)
        textSize(22)
        text("No collision detected", 120, 480)
    }
    else{
        fill(random(255),random(255),random(255));
        textSize(22);
        text("Im colliding with my enemy. Ouch!", 140, 480);
        rect(myXPos, myYPos, 25, 25);

    }

}
