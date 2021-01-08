var database;
var form;
var playerCount = 0;
var PlayersArr;
var game, player;
var gameState = 0;
var runner1, runner2, runner3;
var roadIMG;

// 39 items in total
// var chocoCake, fries, iceCream, coldDrink, broccoli, candles;
// var paperBag, potatoes, peas, lettuce, cheeseCubes, carrots;
// var cucumber, lollipop, chocolate, paints;
// var pomegranate, vinegar, lemon;
// var candyFloss, marshmallows, macaroon;
// var juice, grapes, apple, orange, melon, donought, burger, pasta, pizza;
// var strawberries, biscuits;

var shop1, shop2, shop3, shop4, shop5, shop6;

function preload(){

  // roadIMG = loadImage("imagess/road2.jpg");

  // chocoCake = loadImage("images/chocoCake.jpg");
  // fries = loadImage("images/fries.png");
  // iceCream = loadImage("images/iceCream.png");
  // coldDrink = loadImage("images/coldDrink.jpg");
  // broccoli = loadImage("images/broccoli.png");
  // candles = loadImage("images/candles.jpg");
  // paperBag = loadImage("images/bag.png");
  // potatoes = loadImage("images/potato.jpg");
  // peas = loadImage("images/peas.png");
  // lettuce = loadImage("images/lettuce.jpg");
  // cheeseCubes = loadImage("images/cheese.jpg");
  // carrots = loadImage("images/carrot.jpg");
  // cucumber = loadImage("images/cucumber.jpg");
  // lollipop = loadImage("images/lollipop.jpg");
  // chocolate = loadImage("images/choco.jpg");
  // pomegranate = loadImage("images/pomegranate.jpg");
  // vinegar = loadImage("images/vinegar.png");
  // lemon = loadImage("images/lemon.jpg");
  // marshmallows = loadImage("images/marshmallows.png");
  // macaroon = loadImage("images/macaroons.jpg");
  // juice = loadImage("images/juice.jpg");
  // apple = loadImage("images/apple.jpg");
  // orange = loadImage("images/orange.jpg");
  // melon = loadImage("images/road.jpg");
  // donought = loadImage("images/donought.jpg");
  // burger = loadImage("images/burger.jpg");
  // pizza = loadImage("images/pizza.jpg");
  // biscuits = loadImage("images/biscuits.jpg");


}

function setup(){
  createCanvas(displayWidth*7, displayHeight*7);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  // SHOPS
  shop1 = createSprite(displayWidth + 900, displayHeight, 500, 500)
  shop1.shapeColor = "blue"

  shop2 = createSprite(displayWidth + 900, displayHeight*2, 500, 500)
  shop2.shapeColor = "red"

  shop3 = createSprite(displayWidth + 900, displayHeight*3, 500, 500)
  shop3.shapeColor = "magenta"

  shop4 = createSprite(displayWidth + 900, displayHeight*4, 500, 500)
  shop4.shapeColor = "orange"

  shop5 = createSprite(displayWidth + 900, displayHeight*5, 500, 500)
  shop5.shapeColor = "green"

  shop6 = createSprite(displayWidth + 900, displayHeight*6, 500, 500)
  shop6.shapeColor = "purple"


}

function draw(){
    background(255)

    if(playerCount === 3){
      gameState = 1;
      game.update(1);
    }

    if(gameState === 1){
      game.play();
      background("grey")

      textSize(20)
      fill("black")
      text("YOUR ITEMS :", displayWidth/2 + 250, 70)

      text("1) 1 Chocolate Cake", displayWidth/2 + 250, 120)
      text("2) 5 Vanilla Ice-Cream", displayWidth/2 + 250, 140)
      text("3) 5 Cold Drink Bottles", displayWidth/2 + 250, 160)
      text("4) 1 Fries Packet", displayWidth/2 + 250, 180)
      text("5) 1 Broccoli, 1 Pomegranate, 1 Vinegar bottle,", displayWidth/2 + 250, 200)
      text("3 Lemon", displayWidth/2 + 250, 220)
      text("6) 10 Candles", displayWidth/2 + 250, 240)
      text("7) 5 Paper Bags", displayWidth/2 + 250, 260)
      text("8) 1kg Potatoes, 500g Peas, 500gCarrots, 4 Lettuce, 3 Leaks, \n 3 Chesse Cubes", displayWidth/2 + 250, 280)
  
      drawSprites();

    }

}
