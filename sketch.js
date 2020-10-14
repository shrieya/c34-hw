//Create variables here
 var dog, happyDog, database, foodS, foodStock;
 var dogImg;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  database = firebase.database();
  foodRef = database.ref("food");
  foodRef.on("value", readStock);

}

function readStock(data){
  foodS = data.val();

}



function draw() {  

  background(46,139,87);

if (keyWentDown(UP_ARROW)){
  updateStock(foodS);
  dog.addImage(happyDog);
}



  drawSprites();
  //add styles here


}

function updateStock(x){
  if(x>0){
    x = x-1;
  }
  database.ref('/').update({
    food : x  
  })
}


