class Form
{
    constructor()
    {
        this. input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h1");
        this.title=createElement("h2");
        this.reset=createButton("reset");
     }
    hide()
    {
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }
    display()
    {

this.title.html("car racing game")
this.title.position(displayWidth/2-60,0)


this.input.position(displayWidth/2-40,displayHeight/2-80);


this.button.position(displayWidth/2+30,displayHeight/2)
this.reset.position(250,50)

this.button.mousePressed(()=>{
   this. input.hide()
    this.button.hide()

    player.name=this.input.value()
    playerCount+=1;
    player.index=playerCount;
    player.updatend();
    player.updatecount(playerCount);


    this.greeting.position(displayWidth/2-70,displayHeight/4);
    this.greeting.html("welcome  "+player.name)
});
this.reset.mousePressed(()=>
{
    player.updatecount(0);
    game.update(0);
})




   

}
    
}
