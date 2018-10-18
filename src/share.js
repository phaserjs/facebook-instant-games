class GameShare extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'GameShare', active: false });
    }

    create ()
    {
        this.input.keyboard.on('keydown_P', function () {
            this.facebook.openRequest('Play this now!', 'spyro');
        }, this);
    }

}
