import { Key } from '@/types';
import Player from './Player';

export default class Game {
  public canvas: HTMLCanvasElement;

  public ctx: CanvasRenderingContext2D;

  public w: number;

  public h: number;

  public player: Player;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.w = canvas.width;
    this.h = canvas.height;
    this.player = new Player({ x: 60, y: (this.h / 2) - (Player.h / 2) });
    this.addInputs();
  }

  private addInputs() {
    window.addEventListener('keydown', (
      { key }: KeyboardEvent,
    ) => {
      if (key === Key.SPACE) {
        this.player.jump();
      }
    });
  }

  public update() {
    this.ctx.clearRect(0, 0, this.w, this.h); // clear canvas
    this.player.update();
    this.player.draw(this.ctx);

    if (this.player.position.y + this.player.size.h > this.h) {
      this.player.death();
      this.player.position.y = this.h - this.player.size.h;
    }
  }

  public run() {
    setInterval(() => {
      this.update();
    }, 1000 / 60);
  }
}
