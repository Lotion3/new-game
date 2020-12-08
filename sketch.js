var alex,alexhead,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w16,w17,w18,w19,w20,w21,w22,p1,p2,p3,p4,p5,edges,oldman,box,osword,gamestate=0,cp1=0,lever1,lever2,lever3

function preload() {
  alexhead=loadImage("sprite_0.png")
}

function setup() {
  createCanvas(1800,900);
  alex=createSprite(900, 450, 50, 50);
  alex.addImage("alexi",alexhead)
  alex.scale=(2.0)
  w1=createSprite(1050,150,25,300)
  w2=createSprite(750,150,25,300)
  w3=createSprite(1050,750,25,300)
  w4=createSprite(750,750,25,300)

  w5=createSprite(1300,300,25,200)
  w6=createSprite(1400,212,200,25)
  w7=createSprite(1500,112,25,225)
  w8=createSprite(1595,600,25,400)
  w9=createSprite(1695,412,200,25)
  w10=createSprite(1795,312,25,225)
  w11=createSprite(1695,788,200,25)
  w12=createSprite(1300,550,200,25)
  w13=createSprite(1400,738,25,400)

  w14=createSprite(500,300,25,200)
  w15=createSprite(400,212,200,25)
  w16=createSprite(300,112,25,225)
  w17=createSprite(205,600,25,400)
  w18=createSprite(105,412,200,25)
  w19=createSprite(5,312,25,225)
  w20=createSprite(105,788,200,25)
  w21=createSprite(500,550,200,25)
  w22=createSprite(400,738,25,400)

  p1=createSprite(900,150,300,300)
  p1.shapeColor="red"
  p2=createSprite(1275,100,425,200)
  p2.shapeColor="red"
  p3=createSprite(1175,300,225,200)
  p3.shapeColor="red"

  oldman=createSprite(1400,880,50,50)
  oldman.visible=false
  edges=createEdgeSprites()
  box=createSprite(150,850)
  box.visible=false
  //make apear alexs 1st sword
  osword=createSprite(box.x,box.y-50,30,80)
  osword.visible=false

  lever1=createSprite(900,800,50,50)
  lever1.visible=false
  lever2=createSprite(800,800,50,50)
  lever2.visible=false
  lever3=createSprite(700,800,50,50)
  lever3.visible=false

}

function draw() {
  background("green"); 
  console.log(gamestate)
  alex.collide(edges) 
  if(gamestate===0){
    osword.visible=false
    if(keyDown("up")){
      alex.velocityY=-10
    }
  }
  if(keyDown("down")){
    alex.velocityY=10
  }
  if(keyDown("left")){
    alex.velocityX=-10
  }
  if(keyDown("right")){
    alex.velocityX=10
  }
  if(keyWentUp("up")||keyWentUp("down")){
    alex.velocityY=0
  }
  if(keyWentUp("left")||keyWentUp("right")){
    alex.velocityX=0
  }
  if(keyWentUp("space")&&alex.y>800&&gamestate!==0){
    alex.velocityY=-30
  }
  if(gamestate===1||gamestate===2||gamestate===5||gamestate===4){
  alex.velocityY=alex.velocityY+1
}

  if(mousePressedOver(p1)&&cp1===0){
    dissapear()
    alex.x=10
    alex.y=10
    oldman.visible=true
    gamestate=1
    p1.shapeColor="green"
    gamestate===3
  }

  if((mousePressedOver(p2)||mousePressedOver(p3))&&cp1===1){
    alexreset()
    dissapear()
    lever3.visible=true
    lever2.visible=true
    lever1.visible=true
    gamestate=5
  }

  if(mousePressedOver(lever3)){
    appear()
    gamestate=0
    lever2.visible=false
    lever1.visible=false
    lever3.visible=false
    levelover()
    p2.shapeColor="green"
    p3.shapeColor="green"
  }

  if(gamestate===0){
    appear()
  }
 
  if(gamestate===4){
    textSize(80)
    text("SECRET CODE REMEMBER three letters back",10,450)
  }

  if(gamestate===5){
    textSize(30)
    text("1",lever1.x,lever2.y-50)
    text("2",lever2.x,lever2.y-50)
    text("3",lever3.x,lever3.y-50)
    textSize(50)
    text("WKHH",900,450)
  }


  if(alex.x>oldman.x-50&&gamestate===1){
    textSize(30)
    text("Click to talk",oldman.x,oldman.y-50)
    oldman.visible=true
  }
  if(mousePressedOver(oldman)){
    textSize(30)
    text("Can you bring this box to me young man",oldman.x-150,oldman.y-30)
    box.visible=true
    gamestate=2
  }
  if(alex.isTouching(box)&&gamestate===2&&alex.x<box.x){
    box.x=box.x+10
  }
  if(alex.isTouching(box)&&gamestate===2&&alex.x>box.x){
    box.x=box.x-10
  }
  if(box.x>oldman.x-50&&gamestate===2){
    box.visible=false
    gamestate=4
    textSize(30)
    text("thank you here is a gift",oldman.x,oldman.y-50)
    oldman.visible=false
    osword.visible=true
  }
  //change sword animation laksh
  if(alex.isTouching(osword)&&gamestate===4){
    gamestate=0
    appear()
    cp1=1
    osword.visible=false
    levelover()
  }

  

  drawSprites();
}

function dissapear(){
  w1.visible=false
  w2.visible=false
  w3.visible=false
  w4.visible=false
  w5.visible=false
  w6.visible=false
  w7.visible=false
  w8.visible=false
  w9.visible=false
  w10.visible=false
  w11.visible=false
  w12.visible=false
  w13.visible=false
  w14.visible=false
  w15.visible=false
  w16.visible=false
  w17.visible=false
  w18.visible=false
  w19.visible=false
  w20.visible=false
  w21.visible=false
  w22.visible=false
  p1.visible=false
  p2.visible=false
  p3.visible=false
}

function appear(){
  w1.visible=true
  w2.visible=true
  w3.visible=true
  w4.visible=true
  w5.visible=true
  w6.visible=true
  w7.visible=true
  w8.visible=true
  w9.visible=true
  w10.visible=true
  w11.visible=true
  w12.visible=true
  w13.visible=true
  w14.visible=true
  w15.visible=true
  w16.visible=true
  w17.visible=true
  w18.visible=true
  w19.visible=true
  w20.visible=true
  w21.visible=true
  w22.visible=true
  p1.visible=true
  p2.visible=true
  p3.visible=true
}

function alexreset(){
  alex.y=10
  alex.x=10
}

function levelover(){
  alex.x=900
  alex.y=450
  alex.velocityX=0
  alex.velocityY=0
}