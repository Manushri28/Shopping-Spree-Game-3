class Game{
    constructor(){
    }
  
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value", function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      
      async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      runner1 = createSprite(displayWidth/2, 900);
      runner2 = createSprite(displayWidth/2, 900);
      runner3 = createSprite(displayWidth/2, 900);

      PlayersArr = [runner1, runner2, runner3]
    }
  
    play(){
      form.hide();
      Player.getPlayerInfo();
      
      if(PlayersArr !== undefined){
  
        var index = 0;
  
  
        for(var plr in PlayersArr){
          index = index + 1 ;
  
          var x = 175;
          var y;
  
          x = x + 200;

          y = 200;
          // PlayersArr[index-1].x = x;
          // PlayersArr[index-1].y = y;
  
         
          // if (index === player.index){
          //   camera.position.x = displayWidth/2;
          //   camera.position.y = PlayersArr[index-1].y;
          // }
        
        }
  
      }
  
      // if(keyIsDown(UP_ARROW) && player.index !== null){
      //   PlayersArr[index-1].y +=10
      //   player.update();
      // }
      // if(keyIsDown(DOWN_ARROW) && player.index !== null){
      //   PlayersArr[index-1].y -=10
      //   player.update();
      // }
      // if(keyIsDown(LEFT_ARROW) && player.index !== null){
      //   PlayersArr[index-1].x -=10
      //   player.update();
      // }
      // if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      //   PlayersArr[index-1].x +=10
      //   player.update();
      // }
  
     
      drawSprites();
    }
  
  }
  