const { Physics } = require("phaser");

const config = {
 type: Phaser.AUTO,
 width: 800,
 height: 600,
 Physics:{
    default:'arcade',
    arcade:{
        gravity: {y: 300},
        debug: false   
    }
 },
 scene: {
    preload: preload,
    create: create,
    update: update,
 }
};

const game = new Phaser.Game(config);

let player;
let platforms;
let cursors;
let score = 0;
let scoreText;

function create() {
    this.add.image(400, 300, 'background');

    platforms = this.physics.add.staticGroup();

    platforms.create(400,568, 'platform').setScale(2).refreshBody();
    platforms.create(600,400, 'platform');
    platforms.create(50,250, 'platforms');
    platforms.create(750,220, 'platform');

    player = this.physics.add.sprite(100,450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{key: 'player', frame: 4}],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
    this.physics.add.collider(player, platforms);
    
    cursors = this.input.keyboard.createCursorKeys();

    scoreText = this.add.text(16,16, 'Score:0', {fontSize: '32px', fill:'#fff'});
}

function update(){
    if (cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left', true);
} else if (cursors.right.isDown){
    player.setVelocityX(160);
    player.anims.play('right',true);
} else {
    player.setVelocityX(0);
    player.anims.play('turn');
}
if (cursors.up.isDown && player.body.touching.down){
    player.setVelocityY(-330);
}
if(player.y > this.sys.game.config.height){
    player.setPosition(100,450);
}

score += 1;
scoreText.setText('Score:' + score);
}
