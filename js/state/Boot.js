
$(function(){
    
    //Creation de la zone de jeu 
    var game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-container');
    
    //différentes states du jeu
    game.state.add("Preloader", Preloader);
    game.state.add("MainMenu", MainMenu);
    
    //start state
    game.state.start("Preloader");
    
});