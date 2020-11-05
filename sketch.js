const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle=[];
var plinkos=[];
var division=[];
var divisionHigth=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  for(var k=0;k<=Width;k=k+80){
    division.push(new division(k,height-divisionHigth/2,10,divisionHigth));
  
  }
  for (var j=40;j<=width;j=j+50)
  {
plinkos.push(new plinkos(j,75));
  }
  for (var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  for(var k=0;k<=Width;k=k+80){
    division.push(new division(k,height-divisionHigth/2,10,divisionHigth));
  
  }
  for (var j=40;j<=width;j=j+50)
  {
plinkos.push(new plinkos(j,75));
  }
  for (var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }
}

for(var j=0;j< particle.length;j++)
{
particle[j].display();
}

for(var k=0;k< particle.length;k++)
{
particle[k].display();
}
if(frameCount%60===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10));
}




  drawSprites();
