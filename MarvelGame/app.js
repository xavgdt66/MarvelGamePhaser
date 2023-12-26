var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config)
let dude
let cursors
let platesforme;


function preload(){
this.load.image('doom', 'image/doom-removebg-preview.png')
this.load.image('sky', 'image/background.png');
this.load.image('ground', 'image/BackGalaxy.png');

}



function create(){
    this.add.image(400, 300, 'sky');


 dude = this.physics.add.image(100, 100, 'doom')
 dude.body.collideWorldBounds = true;

 cursors = this.input.keyboard.createCursorKeys()

 plateformes = this.physics.add.staticGroup();
 platforms = this.physics.add.staticGroup();

 platforms.create(400, 568, 'ground').setScale(2).refreshBody();

 platforms.create(600, 400, 'ground');
 platforms.create(50, 250, 'ground');
 platforms.create(750, 220, 'ground');



}


function update(){
    dude.setVelocityX(0)

    if(cursors.up.isDown){
        dude.setVelocity(0, -300)
    }
    if(cursors.right.isDown){
        dude.setVelocity(300, 0)
    }
    if(cursors.left.isDown){
        dude.setVelocity(-100, 0)
    }
}