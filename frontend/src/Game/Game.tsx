import React, { useEffect, useRef, useState } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY } from './Constants';
import { Player } from './Player';
import { Ground } from './Ground';
import { Camera } from './Camera';
import { DarkSky } from './DarkSky';
import { LightSky } from './LightSky';
import { CloudySky } from './CloudySky';
import { Tree } from './Tree';
import { HighPalmTree } from './trees/HighPalmTree';
import { LargeTree } from './trees/LargeTree';
import { MediumPalmTree } from './trees/MediumPalmTree';

import highPalmAsset from '../assets/scenery/trees/high-palm.png'
import mediumPalmAsset from '../assets/scenery/trees/medium-palm.png'
import largeTreeAsset from '../assets/scenery/trees/large-tree.png'

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keys: React.RefObject<Record<string, boolean>> = useRef<Record<string, boolean>>({});

  /*
   * All game assets are declared here
   */
  const player = useRef(Player.getInstance(GRAVITY));

  const camera = useRef(Camera.getInstance());

  const darkSky = useRef(new DarkSky(CANVAS_WIDTH, CANVAS_HEIGHT));
  const lightSky = useRef(new LightSky(CANVAS_WIDTH, CANVAS_HEIGHT));
  const cloudySky = useRef(new CloudySky(CANVAS_WIDTH, CANVAS_HEIGHT));

  const treeList = useRef<Array<Tree>>([]);

  const addTree = (type: string) => {
      switch (type) {
        case 'large':
          treeList.current.push(new LargeTree(130));
          return;
        case 'high':
          treeList.current.push(new HighPalmTree(197));
          return;
        case 'medium':
          treeList.current.push(new MediumPalmTree(145));
      }
    }

  const ground = useRef(new Ground(CANVAS_WIDTH, CANVAS_HEIGHT));

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      player.current.handleUserInput(keys);

      camera.current.follow(player.current);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      darkSky.current.render(ctx);
      lightSky.current.render(ctx);
      cloudySky.current.render(ctx);
      cloudySky.current.render(ctx);

      for (let i = 0; i < treeList.current.length; i++) {
        const tree = treeList.current[i];
        tree.render(ctx);
        tree.handleUserInput(keys);
        if (tree.should_disappear) {
          treeList.current.splice(i, 1);
        }
      }
      ground.current.render(ctx);
      
      player.current.render(ctx);

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ border: '1px solid black' }}
      />

      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div id='tree-modal'>
          <h1>Add tree of your choice</h1>
          <div id='choices'>
            <div className='choice'>
              <img src={highPalmAsset}></img>
              <button onClick={() => addTree('high')}>High Palm Tree</button>
            </div>

            <div className='choice'>
              <img src={mediumPalmAsset}></img>
              <button onClick={() => addTree('medium')}>Medium Palm Tree</button>
            </div>

            <div className='choice'>
              <img src={largeTreeAsset}></img>
              <button onClick={() => addTree('large')}>Large Tree</button>
            </div>
          </div>

          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </>
  );
};

export default Game;
