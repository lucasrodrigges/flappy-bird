'use client';

import Game from '@/entities/Game';
import { useEffect } from 'react';

export default function Home() {
  const runGame = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const game = new Game(canvas);
    game.run();
  };

  useEffect(() => runGame(), []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 p-24"
    >
      <canvas id="canvas" width="960px" height="550px" className="border bg-white" />
      {/* <button type="button" onClick={runGame}>Run</button> */}
    </main>
  );
}
