this.add.text(0, 0).setText([
    'Player ID: ' + this.facebook.playerID,
    'Player Name: ' + this.facebook.playerName
]);

this.facebook.loadPlayerPhoto(this, 'dude').once('photocomplete', this.addPlayerPhoto, this);
