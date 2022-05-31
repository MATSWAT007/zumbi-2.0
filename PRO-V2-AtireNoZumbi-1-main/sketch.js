var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zumbi;
var zumbImg;
var zombis;
var coracao_1_Img;
var coracao_2_Img;
var coracao_3_Img;
var coracao_1;
var coracao_2;
var coracao_3;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zumbImg=loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
  coracao_1_Img=loadImage("assets/heart_1.png");
  coracao_2_Img=loadImage("assets/heart_2.png");
  coracao_3_Img=loadImage("assets/heart_3.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale=1.1

//criando o sprite do jogador

player=createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg)
player.scale=0.3
player.setCollider("rectangle",0,0,300,300);
player.debug=true;

coracao_1=createSprite(displayWidth-150,40,20,20);
coracao_1=addImage(coracao_1_Img);
coracao_2=createSprite(displayWidth-100,40,20,20);
coracao_2=addImage(coracao_2_Img);
coracao_3=createSprite(displayWidth-150,40,20,20);
coracao_3=addImage(coracao_3_Img);
coracao_1.scale=0.4;
coracao_2.scale=0.4;
coracao_3.scale=0.4;
zombis=new Group();

}

function draw() {
  background(0); 

zombs();


  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques

if(keyDown("UP_ARROW")){
player.y-=30;

}
if(keyDown("DOWN_ARROW")){
player.y+=30


}

if(keyWentDown("space")){
player.addImage(shooter_shooting);



}
else if(keyWentUp("space")){
player.addImage(shooterImg);
}
if(zombis.isTouching(player)){
for(var i=0;i<zombis.length;i=i+1){

  if(zombis[i].isTouching(player) ){
zombis[i].destroy();
drawSprites();
  }
}



}




function zombs(){
if(frameCount%50===0){
zumbi=createSprite(random(700,1100),random(100,500),40,40);
zumbi.addImage(zumbImg);
zumbi.scale=0.15
zumbi.velocityX=-5
zumbi.setCollider("rectangle",0,0,450,800);
zumbi.debug=true;


zumbi.lifetime=400;

zombis.add(zumbi);


}







}







































































drawSprites();

  }
  