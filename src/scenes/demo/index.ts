import { GameObjects, Scene, Tilemaps } from 'phaser';
import { Player } from '../../classes/player';

export class DemoScene extends Scene {
    private map!: Tilemaps.Tilemap;
    private tileset!: Tilemaps.Tileset;
    private aboveLayer!: Tilemaps.TilemapLayer;
    private worldLayer!: Tilemaps.TilemapLayer;
    private groundLayer!: Tilemaps.TilemapLayer;
    private player!: Player;
  constructor() {
    super('demo-scene');
  }

  create(): void {
    this.initMap();

    this.player = new Player(this, 100, 100);
	}

    update(): void {
        this.player.update();
    }

    private initMap(): void {
        this.map = this.make.tilemap({ key: 'farm', tileHeight: 16, tileWidth: 16 });
        this.tileset = this.map.addTilesetImage('farm', 'tiles');
        this.aboveLayer = this.map.createLayer('Above', this.tileset, 0, 0);
        this.worldLayer = this.map.createLayer('World', this.tileset, 0, 0);
        this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);

        this.worldLayer.setCollisionByProperty({ collides: true });
    }
}