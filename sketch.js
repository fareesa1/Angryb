var hypnoticBall, database;
var position;


function setup(){
  db = firebase.database();
  // console.log(database);
  createCanvas(500,500);

  ball = createSprite(250,250,30,30)
db.ref("ball/position").on("value",(data)=>{
  db_ball = data.val()
ball.x = db_ball.x
ball.y = db_ball.y
})

console.log(ball.x)

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+3);
    }
    drawSprites();
  
}

function writePosition(x,y){
  ball.x = ball.x+x
  ball.y= ball.y+y

  db.ref("ball/position").update({x:ball.x,y:ball.y})
}

