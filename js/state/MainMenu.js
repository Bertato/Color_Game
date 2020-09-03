var MainMenu = {
    
    button0:null,
    
    create:function()
    {
        this.button0 = this.game.add.button(400, 400, 'bubble0', this.level0, this, 1, 0, 2, 1);

        console.log(this.button0);
    },
    
    
    initPlayer:function()
    {  
        
    },
    
    level0:function()
    {
        this.game.scale.startFullScreen(false);
    },
   
}
        