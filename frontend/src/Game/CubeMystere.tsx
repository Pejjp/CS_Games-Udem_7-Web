import type { Coordinates, GameAsset } from "./GameAsset";
import mysteryBoxAsset from '../assets/spectial/mystery-block.png';
import mushroomAsset from '../assets/mushrooms/red-mushroom.png';
import { Camera } from "./Camera";

export class CubeMystere implements GameAsset{
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
    this.sprite.src = mysteryBoxAsset;

    this.sprite.onload = () => {
      this.width = this.sprite!.naturalWidth;
      this.height = this.sprite!.naturalHeight;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
    return;
  }

  handleCollision(player: any) {
    // Implémentez la logique de ce qui se passe lorsque le joueur entre en collision avec le cube mystère
    console.log("Collision avec le cube mystère !");
    this.activateSound();
    this.superposeMushroom();
  }

  activateSound() {
    // Implémentez la logique pour jouer un son lorsque le cube mystère est activé
    console.log("Son du cube mystère activé !");
  }

  superposeMushroom() {
    // Implémentez la logique pour faire apparaître un champignon lorsque le cube mystère est activé

    this.sprite.src = mushroomAsset; // Changez l'image du cube mystère pour montrer qu'il a été activé
    console.log("Un champignon apparaît !");
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