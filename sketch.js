const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ballImg
var floors
function preload() {
ballImg=loadImage("ball.gif")
}

function setup() {
createCanvas(600,600)
engine = Engine.create();
world = engine.world;
ball = new Ball(100,50,30,30)

}

function draw() {
  Engine.update(engine);
  background("gray");
  ball.display()

}