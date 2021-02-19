class Form {

  constructor()
   {
    this.input = createInput("");
    this.button = createButton('PLAY');
    this.greeting = createElement('h4');
    this.reset=createButton('RESET');
  }
  hide()
  {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
  }

  display()
  {
    var title = createElement('h2')
    var text1 = createElement('h3')
    text1.html("Enter Your Name Here:-")
    title.html("Car Racing Game");
    text1.position(displayWidth/2,displayHeight/2-200)
    title.position(displayWidth/2,0);

    this.input.position(displayWidth/2, displayHeight/2-150);
    this.button.position(displayWidth/2, displayHeight/2-100);
    this.reset.position(displayWidth-100,20);


    this.button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();
      text1.hide();
      
      player.name = this.input.value();
      playerCount+=1;//playerCount = playerCount+1
      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2,displayHeight/2-200);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })

  }
}