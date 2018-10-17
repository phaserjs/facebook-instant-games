class MainMenu extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'MainMenu', active: false });

        this.leaderboard;
        this.mana;
        this.gems;
    }

    create ()
    {
        this.add.image((this.sys.game.config.width / 2) - 80, this.sys.game.config.height / 2, 'zero2');

        this.add.text(0, 0).setText([
            'Player ID: ' + this.facebook.playerID,
            'Player Name: ' + this.facebook.playerName
        ]);

        // 1012910592203052_1042671442560300

        this.facebook.once('getleaderboard', function (leaderboard)
        {
            this.leaderboard = leaderboard;

            console.log(leaderboard);

            leaderboard.getPlayerScore();

            this.input.keyboard.on('keydown_S', function () {
                console.log('save score');
                leaderboard.setScore(16, '{race: "elf", level: 3}');
            }, this);
                
        }, this);

        this.facebook.getLeaderboard('test1');

        this.facebook.preloadAds('1012910592203052_1042671442560300');

        this.facebook.loadPlayerPhoto(this, 'dude').once('photocomplete', this.addPlayerPhoto, this);

        /*
        this.add.image(50, 100, 'stats').setOrigin(0);
        this.add.text(65 + 50, 120, this.facebook.playerName);
        this.mana = this.add.text(280 + 50, 120, '0');
        this.gems = this.add.text(470 + 50, 120, '0');

        this.facebook.getData([ 'mana', 'gems' ]);
        this.facebook.on('getdata', this.updateStats, this);
        this.facebook.on('savedata', this.updateStats, this);

        this.input.keyboard.on('keydown_L', function () {

            console.log('load');
            this.facebook.getData([ 'mana', 'gems' ]).on('getdata', this.updateStats, this);
    
        }, this);

        this.input.keyboard.on('keydown_M', function () {
            this.facebook.data.values.mana += 10;
        }, this);

        this.input.keyboard.on('keydown_G', function () {
            this.facebook.data.values.gems++;
        }, this);

        this.input.keyboard.on('keydown_S', function () {
            this.facebook.saveStats({ level: 2, gold: 1500, bullets: 500, bombs: 4, lives: 9, hp: 100, exp: 80, wisdom: 9, dex: 4 });
        }, this);

        this.input.keyboard.on('keydown_T', function () {
            this.facebook.getStats(['gold']).once('getstats', function (data) {
                console.log('stats loaded', data);
            }, this);
        }, this);

        this.input.keyboard.on('keydown_I', function () {
            this.facebook.incStats({ gold: 50, hp: -1 }).once('incstats', function (data) {
                console.log('stats modified', data);
            }, this);
        }, this);

        this.input.keyboard.on('keydown_P', function () {
            this.facebook.openShare('Play this now!', 'zero2');
        }, this);
        */
    }

    updateStats (data)
    {
        console.log('stats', data);

        if (data.mana)
        {
            this.mana.setText(data.mana);
        }

        if (data.gems)
        {
            this.gems.setText(data.gems);
        }
    }

    addPlayerPhoto (key)
    {
        console.log('addplayerphoto');

        var photo = this.add.image(this.sys.game.config.width / 2, 700, key);

        photo.setInteractive();

        photo.on('pointerup', function () {

            // this.facebook.data.set('mana', 2000);
            // this.facebook.data.set('gems', 43);

            console.log('savedata');

            this.facebook.saveData({
                'mana': 2000,
                'gems': 45
            });

        }, this);
    }

}

console.log('menu');
