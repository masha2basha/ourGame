import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        console.log('Bootscent.loader');
        this.load.image('background', 'assets/bg.png');
    }

    create ()
    {
        console.log('createscene.loader');
        this.scene.start('Preloader');
    }
}
