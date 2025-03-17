/* global Phaser */

const { Phaser } = require("./phaser.min")

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#fff',
    parent: 'game',
    scene: {
        preload,
        create,
        upload
    }
}

new Phaser.Game(config)

function preload() {
    console.log('preload')
}

function create() {
    console.log('create')
}

function upload() {
    console.log('update')
}