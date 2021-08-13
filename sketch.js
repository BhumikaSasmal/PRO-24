// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground,cannon;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    ground = new Ground(600,380,1200,20);
    cannon = new Tanker(50,350,80,30);

}

function draw() {
    ground.display();
    cannon.dispay();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}