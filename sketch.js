
let myXPos = 100;
let myYPos = 100;
let enXPos = 300;
let enYPos = 300;

let myLeft, myRight, myTop, myBottom; 
let enLeft, enRight, enTop, enBottom; 



function setup() {
    createCanvas(1250, 570);
    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(0);

    // Enemy Box
    fill(0, 0, 255);
    rect(enXPos, enYPos, 50, 50);

    // Self Box
    fill(255, 0, 0);
    rect(myXPos, myYPos, 25, 25);
    
    

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
    }

}

