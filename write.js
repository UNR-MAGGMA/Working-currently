var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boyImg,bgImg;
var prize1Img,prize2Img,prize3Img,prize4Img,prize5Img,prize6Img;
var questionImg;

var boy, question;

var questionsGroup;

function preload(){
 boyImg = loadImage("images/boy.png");
 bgImg = loadImage("images/jungle.jpg");
 prize1Img = loadImage("images/prize1.png");
 prize2Img = loadImage("images/prize2.png");
 prize3Img = loadImage("images/prize3.png");
 prize4Img = loadImage("images/prize4.png");
 prize5Img = loadImage("images/prize5.png");
 prize6Img = loadImage("images/prize6.png");
 questionImg = loadImage("images/question.png");
}

function setup(){
  createCanvas(2000,1000);
    
    boy = createSprite(200,625,50,50);
    boy.scale = 0.8;
    boy.addImage("boy",boyImg);
    boy.velocityX = 1;

    questionsGroup = new Group();
    
}

function draw(){
 background(bgImg);
 
 if (gameState===PLAY){
   
 }

 if(questionsGroup.isTouching(boy)){
   boy.velocityX = 0;
   questionsGroup.velocity = 0;
   gameState = END;
}




 spawnQuestion();
 drawSprites();
 
}

function spawnQuestion(){
  if (frameCount % 300 === 0) { 
    var question = createSprite(1300,600,40,10);
    question.y = Math.round(random(600,1000)); 
    question.addImage(questionImg); 
    question.scale = 0.5; 
    question.velocityX = -3; 
    //assign lifetime to the variable
    question.lifetime = 200;
      //adjust the depth
    question.depth = boy.depth;
    boy.depth = boy.depth + 1; 
       //add each question to the group 
    questionsGroup.add(question);
       }
}