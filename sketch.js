var monkey, monkey_running
var banana, bananaImage, obstacle, obstacle2
var FoodGroup, obstacleGroup
var score
var ground
var bananana
var bananaImage
var score2 = 0
var monkeyGroup
var banananagroup
var obstacleGroup

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacle2 = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png")
}



function setup() {
  createCanvas(600, 600)
  ground = createSprite(300, 595, 900, 10)
  ground.velocityX = -5
  monkey = createSprite(100, 595, 30, 30)
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale = 0.16

  obstacleGroup = new Group
  monkeyGroup = new Group
  banananaGroup = new Group

}


function draw() {
  background("white")

  ground.x = ground.width / 2

  monkey.collide(ground)
  if (keyWentDown("space")) {
    monkey.velocityY = -20
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkeyGroup.add(monkey)
  if (monkey.isTouching(banananaGroup)) {
    banananaGroup.destroyEach()
    monkey.scale = monkey.scale + 0.02
  }
  spawnObstacle()
  banana()
  score()
  doReset()
  drawSprites()
}

function spawnObstacle() {
  if (frameCount % 200 === 0) {
    obstacle = createSprite(600, 550, 40, 40)
    obstacle.addImage("obstacle", obstacle2)
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
  }
}

function banana() {
  if (frameCount % 100 === 0) {
    bananana = createSprite(600, 150, 20, 20)
    bananana.addImage("banana", bananaImage)
    bananana.scale = 0.111
    bananana.velocityX = -5
    bananana.lifetime = 120
    bananana.x = Math.round(random(150, 280))
    banananaGroup.add(bananana)
  }
}

function score() {
  textSize(18)
  text("Survival Time:", 385, 50)
  text(score2, 509, 50)
  score2 = Math.round(frameCount / frameRate())
  console.log(score2)
}

function doReset() {
  if (monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach()
    monkey.scale = monkey.scale - 0.02
  }
}