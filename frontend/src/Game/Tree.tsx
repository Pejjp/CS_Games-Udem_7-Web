import type { Coordinates, GameAsset } from './GameAsset';
import { Player } from './Player';
import { CANVAS_HEIGHT, MAP_WIDTH } from './Constants';
import { Camera } from './Camera';
import React from 'react';
import bababoeyy from '../assets/sounds/bababoeyy.mp3'

export class Tree implements GameAsset {
    sprite: HTMLImageElement;
    pos: Coordinates;
    width: number = 0;
    height: number = 0;
    fired: boolean = false;
    half_underground: boolean = false;
    should_disappear: boolean = false;

    useCamera: boolean = true;

    constructor(height: number, src: string) {
    this.sprite = new Image();
    this.sprite.src = src;

    this.sprite.onload = () => {
      this.width = this.sprite!.naturalWidth;
      this.height = this.sprite!.naturalHeight;
    };

    const random_x = Math.random() * MAP_WIDTH;
    if (height == 0) height = 100;
    this.pos = { x: random_x + this.width, y: CANVAS_HEIGHT - 100 - height };    
  }

    handleUserInput(keys: React.RefObject<Record<string, boolean>>): void {
        if (keys.current?.[" "] && this.isPlayerInBounds() && !this.fired) {
            this.fired = true;
            this.pos.y += this.height / 2;
            if (this.half_underground) {
                this.should_disappear = true;
                new Audio(bababoeyy).play()
                return;
            }
            this.half_underground = true;
        }

        if (!keys.current?.[" "]) {
            this.fired = false;
        }
    }

    isPlayerInBounds(): boolean {
        const player = Player.getInstance();

        const leftBound = this.pos.x - this.width / 2;
        const rightBound = this.pos.x + this.width / 2;

        // Check x
        if (player.pos.x < leftBound || player.pos.x > rightBound) return false;

        if (!player.onGround) return false; // Can't chop while mid-air (although that would be cool)

        return true;
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