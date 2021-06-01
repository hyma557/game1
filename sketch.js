var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(18);
  text("Score : "+score,500,40);
  text("(Tasks)", 450, 350)
  text("step5 : Please write in capital letters", 250, 450)
  text("step1 : first indentyfy three jumbled words", 250, 370 )
  text("step2 : delete the code1, code2, code3 instede write the jubbled letters that you have found", 250, 390)
  text("step3 : click on check if it is a correct word the score will be increased", 250, 410)
  text("step4 : if score is 3 three than all treause will be oppend", 250, 430)
  fill("white");


  
  if(score === 3){
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250,200);
    text("You should give me party", 250, 300)
  }
  
  drawSprites();
}