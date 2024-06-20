import Phaser from "phaser";
import LoadingBar from '../classes/LoadingBar';
import tilesetPng from '../../assets/tileset.png';
import tilemapJson from '../../assets/tilemap.json';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('Preload');
    }
    preload() {
        this.add.sprite(0, 0, 'bg').setOrigin(0);
        this.loadingBar = new LoadingBar(this);
        this.load.spritesheet('tileset', tilesetPng, {frameWidth: 64, frameHeight: 64});
        this.load.tilemapTiledJSON('tilemap', tilemapJson);
    }
    create() {
        this.scene.start('Game');
    }
}