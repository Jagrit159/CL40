class Form{
    constructor(){
     this.input = createInput("name");
     this.button = createButton("play");
     this.greetings = createElement("h5");
     this.reset = createButton("reset!")
    }

    hide(){
     this.greetings.hide()
     this.input.hide()
     this.button.hide()
    }

display(){
 var Title = createElement("h2")
 Title.html("Car Racing")
 Title.position(displayWidth/2-50,0)
 this.input.position(displayWidth/2-40,displayHeight/2-80);
 this.button.position(displayWidth/2+30,displayHeight/2);
 this.reset.position(displayWidth-100,20);
 this.button.mousePressed(()=>{
 this.input.hide()
 this.button.hide()
 player.name = this.input.value()
    playerCount = playerCount+1
    player.index = playerCount;
    player.update()
    player.updateCount(playerCount)
    this.greetings.html("hello!"+ player.name)
    this.greetings.position(displayWidth/2-70,displayHeight/2);
 })
 this.reset.mousePressed(()=>{
     player.updateCount(0)
     game.update(0)
 })
}
};
