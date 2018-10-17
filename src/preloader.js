class Preloader extends Phaser.Scene {

    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.facebook.showLoadProgress(this);
        this.facebook.once('startgame', this.startGame, this);

        this.load.image('mask', 'assets/mask1.png');
        this.load.image('stats', 'assets/stats.png');
        this.load.bitmapFont('short', 'assets/short-stack.png', 'assets/short-stack.xml');
        this.load.bitmapFont('azo', 'assets/azo-fire.png', 'assets/azo-fire.xml');

    }

    startGame ()
    {
        // this.scene.start('MainMenu');
        // this.scene.start('PlayerDetails');
        this.scene.start('GameStats');
    }

}
