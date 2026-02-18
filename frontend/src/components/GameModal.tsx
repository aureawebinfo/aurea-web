import { X, Trophy, Play, RotateCcw, Grid, Ghost, Square, Box, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. JUEGO SNAKE (Nativo React)
// ==========================================
const SnakeGame = ({ onGameOver }: { onGameOver: (score: number) => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let velocity = { x: 0, y: 0 };
    let speed = 7;
    let loop: any;

    const startGame = () => {
      document.addEventListener('keydown', keyPush);
      loop = setInterval(game, 1000 / speed);
    };

    const keyPush = (evt: KeyboardEvent) => {
      switch (evt.key) {
        case 'ArrowLeft': if(velocity.x !== 1) velocity = { x: -1, y: 0 }; break;
        case 'ArrowUp': if(velocity.y !== 1) velocity = { x: 0, y: -1 }; break;
        case 'ArrowRight': if(velocity.x !== -1) velocity = { x: 1, y: 0 }; break;
        case 'ArrowDown': if(velocity.y !== -1) velocity = { x: 0, y: 1 }; break;
      }
    };

    const game = () => {
      // Mover Snake
      const head = { x: snake[0].x + velocity.x, y: snake[0].y + velocity.y };

      // Colisión Bordes (Modo Infinito)
      if (head.x < 0) head.x = tileCount - 1;
      if (head.x >= tileCount) head.x = 0;
      if (head.y < 0) head.y = tileCount - 1;
      if (head.y >= tileCount) head.y = 0;

      // Colisión Cuerpo
      for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y && snake.length > 2) {
          clearInterval(loop);
          onGameOver(snake.length - 1); // Score = largo - 1
          return;
        }
      }

      snake.unshift(head);

      // Comer Comida
      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 1);
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
        // Aumentar velocidad ligeramente
        clearInterval(loop);
        speed += 0.2;
        loop = setInterval(game, 1000 / speed);
      } else {
        snake.pop();
      }

      // Dibujar
      ctx.fillStyle = '#050505'; // Fondo
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Comida
      ctx.fillStyle = '#d4af37'; // Dorado
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#d4af37';
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
      ctx.shadowBlur = 0;

      // Snake
      ctx.fillStyle = '#10b981'; // Esmeralda
      for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize - 2, gridSize - 2);
      }
    };

    startGame();
    return () => {
      clearInterval(loop);
      document.removeEventListener('keydown', keyPush);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 text-[#d4af37] font-bold text-xl">Score: {score}</div>
      <canvas ref={canvasRef} width="400" height="400" className="bg-black border border-[#d4af37]/30 shadow-lg rounded-lg" />
      <p className="mt-4 text-gray-400 text-sm">Usa las flechas del teclado para moverte</p>
    </div>
  );
};

// ==========================================
// 2. SPACE RUN (Tu juego anterior, encapsulado)
// ==========================================
const SpaceRunGame = ({ onGameOver }: { onGameOver: (score: number) => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 400;

    let animationId: number;
    let frame = 0;
    let gameSpeed = 3;
    const player = { x: 50, y: 200, width: 30, height: 30, speed: 5 };
    const obstacles: any[] = [];
    const keys: { [key: string]: boolean } = {};

    const handleKeyDown = (e: KeyboardEvent) => keys[e.key] = true;
    const handleKeyUp = (e: KeyboardEvent) => keys[e.key] = false;
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Estrellas
      if (Math.random() < 0.1) {
        ctx.fillStyle = '#FFF';
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
      }

      if (keys['ArrowUp'] && player.y > 0) player.y -= player.speed;
      if (keys['ArrowDown'] && player.y < canvas.height - player.height) player.y += player.speed;

      ctx.fillStyle = '#d4af37';
      ctx.fillRect(player.x, player.y, player.width, player.height);

      if (frame % 100 === 0) {
        const height = Math.random() * 100 + 50;
        obstacles.push({ x: canvas.width, y: Math.random() * (canvas.height - height), width: 30, height: height });
      }

      obstacles.forEach((obs, index) => {
        obs.x -= gameSpeed;
        ctx.fillStyle = '#0a3f38';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

        if (
          player.x < obs.x + obs.width && player.x + player.width > obs.x &&
          player.y < obs.y + obs.height && player.y + player.height > obs.y
        ) {
          cancelAnimationFrame(animationId);
          onGameOver(Math.floor(frame / 10)); // Score basado en tiempo
        }
        if (obs.x + obs.width < 0) obstacles.splice(index, 1);
      });

      if (frame % 500 === 0) gameSpeed += 0.5;
      frame++;
      setScore(Math.floor(frame / 10));
      animationId = requestAnimationFrame(gameLoop);
    };

    gameLoop();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 text-[#d4af37] font-bold text-xl">Distancia: {score}m</div>
      <canvas ref={canvasRef} className="w-full h-full block rounded-lg border border-white/10" />
    </div>
  );
};

// ==========================================
// 3. COMPONENTE PRINCIPAL (Menú y Router)
// ==========================================
interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GameModal = ({ isOpen, onClose }: GameModalProps) => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [gameOverScore, setGameOverScore] = useState<number | null>(null);

  // Lista de Juegos Disponibles
  const games = [
    { id: 'spacerun', name: 'Space Run', icon: Rocket, color: 'text-purple-400', desc: 'Esquiva obstáculos en el vacío.' },
    { id: 'snake', name: 'Ceros Snake', icon: Box, color: 'text-emerald-400', desc: 'El clásico de la serpiente.' },
    // Estos juegos requieren que subas los archivos a la carpeta /public/games/
    { id: 'pacman', name: 'Pacman', icon: Ghost, color: 'text-yellow-400', desc: 'Come fantasmas. (Requiere archivos)', external: true },
    { id: 'tetris', name: 'Tetris', icon: Grid, color: 'text-blue-400', desc: 'Ordena los bloques. (Requiere archivos)', external: true },
    { id: '2048', name: '2048', icon: Square, color: 'text-orange-400', desc: 'Matemáticas adictivas. (Requiere archivos)', external: true },
  ];

  const handleGameOver = (score: number) => {
    setGameOverScore(score);
  };

  const resetGame = () => {
    setGameOverScore(null);
  };

  const backToMenu = () => {
    setActiveGame(null);
    setGameOverScore(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl h-[80vh] bg-[#0a0a0a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.15)] flex flex-col"
          >
            {/* --- HEADER --- */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-gradient-to-r from-[#050505] to-[#0f1f17]">
              <div className="flex items-center gap-3">
                <Trophy className="text-[#d4af37]" />
                <h2 className="text-white font-heading text-2xl tracking-widest uppercase">
                  Áurea <span className="text-[#d4af37]">Arcade</span>
                </h2>
              </div>
              <div className="flex gap-4">
                {activeGame && (
                  <button onClick={backToMenu} className="px-4 py-2 border border-white/20 rounded-full text-xs text-white hover:bg-white/10 transition">
                    VOLVER AL MENÚ
                  </button>
                )}
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="flex-1 relative overflow-hidden bg-[url('/img/backgrounds/grid.png')] bg-repeat opacity-90">
              
              {/* VISTA 1: MENÚ DE SELECCIÓN */}
              {!activeGame && (
                <div className="absolute inset-0 overflow-y-auto p-8">
                  <h3 className="text-center text-gray-400 mb-8 font-sans">SELECCIONA TU DESAFÍO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {games.map((game) => (
                      <motion.button
                        key={game.id}
                        whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setActiveGame(game.id); resetGame(); }}
                        className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-center gap-4 aspect-square"
                      >
                        <game.icon size={48} className={`${game.color} group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all`} />
                        <div>
                          <h4 className="text-xl font-bold text-white font-heading mb-2">{game.name}</h4>
                          <p className="text-xs text-gray-400">{game.desc}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* VISTA 2: JUEGO ACTIVO */}
              {activeGame && (
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  
                  {/* PANTALLA GAME OVER OVERLAY */}
                  {gameOverScore !== null && (
                    <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                      <h3 className="text-5xl font-heading text-[#d4af37] mb-2 animate-bounce">GAME OVER</h3>
                      <p className="text-white text-2xl mb-8">Puntuación Final: {gameOverScore}</p>
                      <div className="flex gap-4">
                        <button onClick={resetGame} className="px-8 py-3 bg-[#d4af37] text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition">
                          <RotateCcw size={20} /> REINTENTAR
                        </button>
                        <button onClick={backToMenu} className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition">
                          MENÚ
                        </button>
                      </div>
                    </div>
                  )}

                  {/* RENDERIZADOR DE JUEGOS */}
                  {activeGame === 'snake' && gameOverScore === null && <SnakeGame onGameOver={handleGameOver} />}
                  {activeGame === 'spacerun' && gameOverScore === null && <SpaceRunGame onGameOver={handleGameOver} />}
                  
                  {/* IFRAMES PARA JUEGOS EXTERNOS (Pacman, Tetris, 2048) */}
                  {/* NOTA: Debes descargar el código de estos juegos y ponerlos en la carpeta /public/games/nombre_juego/index.html */}
                  {['pacman', 'tetris', '2048'].includes(activeGame) && (
                    <iframe 
                      src={`/games/${activeGame}/index.html`} 
                      className="w-full h-full border-none rounded-lg bg-black"
                      title={activeGame}
                    />
                  )}

                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};