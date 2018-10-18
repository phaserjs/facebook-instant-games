class GameStats extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'GameStats', active: false });
    }

    create ()
    {
        this.add.image(25, 100, 'stats').setOrigin(0);
        this.add.text(65 + 25, 120, this.facebook.playerName);
        // this.mana = this.add.text(280 + 25, 120, '0');
        // this.gems = this.add.text(470 + 25, 120, '0');

        // this.facebook.getData([ 'mana', 'gems' ]);

        // this.facebook.on('getdata', this.statsLoaded, this);
        // this.facebook.on('savedata', this.updateStats, this);

        this.facebook.on('savestats', this.statsSaved, this);

        this.facebook.on('getstats', this.statsLoaded, this);

        this.facebook.on('getstatsfail', function (error) {
            console.log('stats failed', error);
        });

        this.facebook.on('savestatsfail', function (error) {
            console.log('save stats failed', error);
        });

        this.input.keyboard.on('keydown_S', function () {
            console.log('save1');
            this.facebook.saveStats({ level: 1, gold: 100, lives: 4 });
        }, this);

        this.input.keyboard.on('keydown_L', function () {

            console.log('load');
            this.facebook.getStats();
    
        }, this);

        this.input.keyboard.on('keydown_I', function () {
            this.facebook.incStats({ gold: 3 }).once('incstats', function (data) {
                console.log('stats modified', data);
            }, this);
        }, this);

        this.input.keyboard.on('keydown_K', function () {
            console.log('save2');
            this.facebook.saveStats({ level: 2, gold: 200, hp: 100, tommy: 33 });
        }, this);

        /*
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

    statsLoaded (data)
    {
        console.log('stats loaded', data);
    }

    statsSaved (data)
    {
        console.log('stats saved', data);
    }

    statsUpdated (data)
    {
        console.log('stats updated', data);

        // if (data.mana)
        // {
        //     this.mana.setText(data.mana);
        // }

        // if (data.gems)
        // {
        //     this.gems.setText(data.gems);
        // }
    }

}
