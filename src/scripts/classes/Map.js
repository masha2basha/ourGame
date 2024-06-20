export default class Map {
    constructor(scene) {
        this.scene = scene;
        this.init();
        this.create();
    }
    init() {
        this.tilemap = this.scene.make.tilemap({key: 'tilemap'});
        this.tileset = this.tilemap.addTilesetImage('tileset', 'tileset', 64, 64, 0, 1);

    }

    create() {
        this.tilemap.createStaticLayer('grass', this.tileset);

    }
}