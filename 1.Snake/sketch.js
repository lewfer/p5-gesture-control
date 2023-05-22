// Llewelyn Fernandes
// Modifed code and commented code from here:
//
// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

// Set up some variables
let snake;           // the snake
let food;            // the food
let unitSize = 20;   // size of a block ('snake' units)
let w;               // the width of the screen in snake units
let h;               // the height of the screen in snake units
let foodColour = "chocolate"

// This function is called before the game starts
function preload() {
}

// This function is called when the game starts
function setup() {
  // Create our game area
  createCanvas(640, 480);
  
  // Compute the width and height of the game area in 'snake' units
  w = floor(width / unitSize);
  h = floor(height / unitSize);
  
  // Slow the game down
  frameRate(5);
  
  // Create the initial snake and food
  snake = new Snake();
  makeFood();
}


// This function is called when a key on the keyboard is pressed
// It moves the snake when the arrow keys are pressed
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
}

// This function is the draw loop.  It gets called over-and-over
function draw() {
  // Clear the background
  background("whitesmoke");
  
  // Scale everything up so we can work in snake units
  scale(unitSize);
  
  // If we've eaten some food, create some new food
  if (snake.eat(food)) {
    makeFood();
  }
  
  // Update the position of the snake and draw it
  snake.update();
  snake.show();

  // If the game has ended, show a red screen
  if (snake.endGame()) {
    background("darkred");
    scale(1/unitSize)
    textSize(48)
    textAlign(CENTER, TOP)
    fill("white")
    text("Game Over", width/2, height/2)
    noLoop();
  }

  // Draw the food
  noStroke();
  fill(foodColour);
  rect(food.x, food.y, 1, 1);
}