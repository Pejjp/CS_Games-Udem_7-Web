import { Camera } from './Camera';
import cloudySkyAsset from '../assets/background/cloudy_sky.png';
import type { Coordinates, GameAsset } from './GameAsset';

export class CloudySky implements GameAsset {
  sprite: HTMLImageElement;

  width: number;
  height: number;

  pos: Coordinates;

  useCamera: boolean = true;

  constructor(width: number, height: number) {
    this.sprite = new Image();

    this.width = width;
    this.height = height;

    this.pos = { x: 0, y: 0 };

    this.sprite = new Image();
    this.sprite.src = cloudySkyAsset;

    this.sprite.onload = () => {
      this.width = this.sprite!.naturalWidth;
      this.height = this.sprite!.naturalHeight;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
    return;
  }

  render(ctx: CanvasRenderingContext2D): void {
    const camera = Camera.getInstance();

    ctx.drawImage(
      this.sprite,
      this.useCamera ? -camera.x * 0.1 : this.pos.x,
      this.pos.y,
      this.width,
      this.height,
    );
  }
}
