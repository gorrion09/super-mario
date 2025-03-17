/* global Phaser */

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#049cd8',
    parent: 'game',
    scene: {
        preload,
        create,
        upload
    }
}

new Phaser.Game(config)

function preload() {
    this.load.image(
        'cloud1',
        'assets/scenery/overworld/cloud1.png'
    )

    this.load.image(
        'floorbricks',
        'assets/scenery/overworld/floorbricks.png'
    )

    this.load.spritesheet(
        'mario',
        'assets/entities/mario.png',
        { frameWidth: 18, frameHeight: 16}
    )

    this.anims.create({
        key: 'mario-walk',
        frames: this.anims.generateFrameNumbers(
            'mario',
            { start: 0, end: 4}
        ),
        repeat: -1
    })
}

function create() {
    this.add.image(100,50, 'cloud1')
    .setOrigin(0,0)
    .setScale(0.15)

    this.mario = this.add.sprite(50,210,'mario')
    .setOrigin(0,1)

    this.add.tileSprite(0, config.height - 32, config.width, 32, 'floorbricks')
        .setOrigin(0,0)

    this.keys = this.input.keyboard.createCursorKeys()
}

function upload() {
    if(this.keys.left.isDown){
        this.mario.x -= 2
        this.mario.anims.play('mario-walk', true)
    } else if (this.keys.right.isDown){
        this.mario.x += 2
        this.mario.anims.play('mario-walk', true)
    }
}