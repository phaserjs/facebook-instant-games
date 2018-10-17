FBInstant.initializeAsync().then(function() {

    var config = {
        type: Phaser.CANVAS,
        width: 800,
        height: 600,
        backgroundColor: '#222448',
        scene: [ Preloader, GameStats ]
    };

    new Phaser.Game(config);

});
