class GameData extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'GameData', active: false });

        this.mana;
        this.gems;
    }

    create ()
    {
        this.mana = this.add.text(20, 20, 'Mana: 0');
        this.gems = this.add.text(20, 80, 'Gems: 0');

        this.facebook.on('getdata', this.dataLoaded, this);
        this.facebook.on('savedata', this.dataSaved, this);

        this.facebook.on('getdatafail', function (error) {
            console.log('data failed', error);
        });

        this.facebook.on('savedatafail', function (error) {
            console.log('save data failed', error);
        });

        this.facebook.getData([ 'mana', 'gems', 'color', 'shaz', 'music' ]);

        this.input.keyboard.on('keydown_M', function () {
            this.facebook.data.values.mana += 10;
        }, this);

        this.input.keyboard.on('keydown_G', function () {
            this.facebook.data.values.gems++;
        }, this);

        this.input.keyboard.on('keydown_C', function () {

            this.facebook.saveData({
                mana: 10,
                gems: 4,
                music: 'rock'
            });

        }, this);

        /*
        this.input.keyboard.on('keydown_L', function () {

            console.log('load');
            this.facebook.getData([ 'mana', 'gems' ]).on('getdata', this.updateStats, this);
    
        }, this);

        this.input.keyboard.on('keydown_P', function () {
            this.facebook.openShare('Play this now!', 'zero2');
        }, this);
        */
    }

    dataLoaded (data)
    {
        console.log('data loaded', data);

        this.dataUpdated(data);
    }

    dataSaved (data)
    {
        console.log('data saved', data);

        this.dataUpdated(data);
    }

    dataUpdated (data)
    {
        if (data.mana)
        {
            this.mana.setText('Mana: ' + data.mana);
        }

        if (data.gems)
        {
            this.gems.setText('Gems: ' + data.gems);
        }
    }

}
