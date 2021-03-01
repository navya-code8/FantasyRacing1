class Game{
    constructor(){

    }
    getState() {
      database.ref('gameState').on("value", (data)=>{
          var value = data.val() 
          gameState = value
        })
        
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if(gameState === 0){
            player = new Player()
            form = new Form();

            player.getPlayerCount()
            form.display()
            

        }

        
        player1 = createSprite(100,100,80,100);
        player1.addImage(dragon);
        player2 = createSprite(100,100,80,100);
        player2.addImage(serpent)
        player3 = createSprite(100,100,80,100);
        player3.addImage(unicorn)
        player4 = createSprite(100,100,80,100);
        player4.addImage(phoenix)
       
        }

       

    
    
    play(){

        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined);
            var index = 0
            var x = 200
            var y = 0 
            //add track image here

            for(var plr in llPlayers){
                index++
                x+=300
                y = displayHeight - allPlayers[plr].distance-100
          
            }

            if(index===player.index){

                fill("gray")
                strokeWeight(15)
                ellipse(x,y,100,100);

                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name, x,y+100)
            }
    }
        
          
         
         
        
  
        }