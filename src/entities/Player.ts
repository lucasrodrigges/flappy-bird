import { IPosition, ISize } from '@/types';

export default class Player {
  public size: ISize;

  public position: IPosition;

  public velocity: IPosition;

  public static w = 40;

  public static h = 40;

  public isAlive: boolean;

  constructor(position: IPosition) {
    this.size = { w: Player.w, h: Player.h };
    this.position = position;
    this.velocity = { x: 0, y: 0 };
    this.isAlive = true;
  }

  public update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (!this.isAlive) return;

    this.velocity.y += 0.4; // gravity
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
  }

  public jump() {
    this.velocity.y = -8;
  }

  public death() {
    console.log('se fodeu!');
    this.velocity.y = 0;
  }
}
