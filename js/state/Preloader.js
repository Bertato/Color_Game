var Preloader = {

    
    preload:function()
    {
      this.game.load.spritesheet("bubble0","assets/button_0.png",334,337,3);
    },
    
    
    create:function()
    {
        this.game.state.start("MainMenu");
    }
}