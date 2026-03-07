import { CANVAS_WIDTH, MAP_WIDTH } from './Constants';
import { Player } from './Player';

export class Camera {
  private static instance: Camera;

  x = 0;
  y = 0;

  private constructor() {}

  static getInstance(): Camera {
    if (!Camera.instance) {
      Camera.instance = new Camera();
    }
    return Camera.instance;
  }

  follow(player: Player) {
    const leftMargin = CANVAS_WIDTH * 0.3;
    const rightMargin = CANVAS_WIDTH * 0.3;

    const playerScreenX = player.pos.x - this.x;

    if (playerScreenX > CANVAS_WIDTH - rightMargin) {
      this.x = player.pos.x - (CANVAS_WIDTH - rightMargin);
    } else if (playerScreenX < leftMargin) {
      this.x = player.pos.x - leftMargin;
    }

    const maxX = MAP_WIDTH - CANVAS_WIDTH;
    this.x = Math.max(0, Math.min(this.x, maxX));
  }

  worldToScreenX(x: number) {
    return x - this.x;
  }

  worldToScreenY(y: number) {
    return y - this.y;
  }
}
