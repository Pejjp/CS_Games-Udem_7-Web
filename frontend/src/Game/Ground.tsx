import { Camera } from './Camera';
import groundAsset from '../assets/background/ground.png';
import type { Coordinates, GameAsset } from './GameAsset';

export class Ground implements GameAsset {
  sprite: HTMLImageElement;
  pos: Coordinates;
  width: number;
  height: number;

  useCamera: boolean = true;

  constructor(width: number, height: number) {
    this.sprite = new Image();

    this.width = width;
    this.height = height;

    this.pos = { x: 0, y: 0 };

    this.sprite = new Image();
    this.sprite.src = groundAsset;

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
      this.useCamera ? camera.worldToScreenX(this.pos.x) : this.pos.x,
      this.pos.y,
      this.width,
      this.height,
    );
  }
}
