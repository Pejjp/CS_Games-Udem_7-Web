export interface Coordinates {
  x: number;
  y: number;
}

export interface GameAsset {
  sprite: HTMLImageElement;
  pos: Coordinates;
  width: number;
  height: number;

  handleUserInput(keys: React.RefObject<Record<string, boolean>>): void;
  render(ctx: CanvasRenderingContext2D): void;
}
