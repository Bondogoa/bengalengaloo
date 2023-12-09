let game;
let config = {
    type: Phaser.CANVAS,
    width: 384,
    height: 240,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 300
            }
        }
    },
    scene: [preloadGame, playGame, gameOverScene] // Add the new scene here
};

game = new Phaser.Game(config);


class gameOverScene extends Phaser.Scene {
    create() {
        this.add.text(100, 100, 'Game Over', { fontFamily: 'Arial', fontSize: 32, color: '#ff0000' });
      
    }
}
