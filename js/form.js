class Form{
    constructor(){
       this.inputBox = createInput("Name")
       this.button = createButton('Play')
       this.greeting = createElement("h2")

    }
    hide() {
     
    }
    display() {
        var title = createElement("h1")
        title.html("Welcome to Fantasy Racing!")
        title.position(windowWidth/2 - 100,100)
        this.inputBox.position(500, 300) 
        this.button.position(550, 350)
        this.button.mousePressed(()=>{
            this.button.hide()
            this.inputBox.hide()
            player.playerName = this.inputBox.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.playerName);
            this.greeting.position(windowWidth/2 -70, windowHeight/4)
        })





    }
}