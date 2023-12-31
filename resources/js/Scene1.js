class preloadGame extends Phaser.Scene{
  constructor(){
    super("PreloadGame");
  }
  
    preload(){ 
       // load all assets tile sprites
       this.load.image("bg_1", "resources/assets/bg-1.png");
       this.load.image("bg_2", "resources/assets/bg-2.png");
       this.load.image("ground", "resources/assets/ground.png");
       // load spritesheet
       this.load.spritesheet("player", "resources/assets/bee.png",{
         frameWidth: 37,
         frameHeight: 39
       });

    }

    create() { 
      this.scene.start("PlayGame");
    }
}