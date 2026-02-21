import { X, Trophy, Grid, Ghost, Square, Maximize, Minimize, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GameModal = ({ isOpen, onClose }: GameModalProps) => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setActiveGame(null);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleGameSelect = (gameId: string) => {
    setActiveGame(gameId);
    if (modalRef.current && !document.fullscreenElement) {
      modalRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleClose = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    onClose();
  };

  const handleGoHome = () => {
    handleClose();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleBackToMenu = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setActiveGame(null);
  };

  // 🔥 CAMBIO AQUÍ: Array actualizado con Tower Blocks
  const games = [
    { id: 'pacman', name: 'Pacman', icon: Ghost, color: 'text-yellow-400', desc: 'El clásico come fantasmas.' },
    { id: 'TowerBlocks', name: 'Tower Blocks', icon: Grid, color: 'text-blue-400', desc: 'Apila los bloques lo más alto que puedas.' },
    { id: '2048', name: '2048', icon: Square, color: 'text-orange-400', desc: 'Junta los números hasta 2048.' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl ${isFullscreen ? 'p-0' : 'p-4 md:p-8'}`}
        >
          <motion.div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()} 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`relative w-full max-w-5xl bg-[#0a0a0a] border border-[#d4af37]/30 flex transition-all duration-300 shadow-[0_0_100px_rgba(212,175,55,0.15)] ${
              isFullscreen ? 'h-screen border-none rounded-none flex-col md:flex-row' : 'h-[85vh] rounded-2xl flex-col'
            }`}
          >
            {/* --- HEADER / BARRA LATERAL --- */}
            <div className={`flex bg-gradient-to-r from-[#050505] to-[#0f1f17] transition-all duration-300 flex-shrink-0 ${
              isFullscreen
                ? 'w-full md:w-72 h-auto md:h-full flex-row md:flex-col justify-between md:justify-start items-center md:items-stretch p-3 md:p-6 border-b md:border-b-0 md:border-r border-white/10 gap-2 md:gap-8'
                : 'w-full h-auto flex-row justify-between items-center p-3 md:p-6 border-b border-white/10'
            }`}>
              
              <div className={`flex items-center gap-2 md:gap-3 ${isFullscreen ? 'md:flex-col md:mb-4' : ''}`}>
                <Trophy className="text-[#d4af37] w-5 h-5 md:w-8 md:h-8" />
                <h2 className={`text-white font-heading tracking-widest uppercase ${isFullscreen ? 'text-sm md:text-2xl md:text-center' : 'text-sm md:text-2xl hidden md:block'}`}>
                  Áurea <span className={`text-[#d4af37] md:inline ${isFullscreen ? 'hidden md:block' : ''}`}>Arcade</span>
                </h2>
              </div>

              <div className={`flex items-center gap-2 md:gap-4 ${isFullscreen ? 'md:flex-col md:w-full md:gap-4' : ''}`}>
                {activeGame && (
                  <>
                    <button
                      onClick={toggleFullScreen}
                      className={`p-2 md:px-4 md:py-3 border border-[#d4af37]/50 rounded-full text-xs text-[#d4af37] font-bold hover:bg-[#d4af37]/10 transition flex items-center justify-center gap-2 ${isFullscreen ? 'md:w-full' : ''}`}
                    >
                      {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                      <span className="hidden md:inline">
                        {isFullscreen ? 'REDUCIR' : 'PANTALLA COMPLETA'}
                      </span>
                    </button>

                    <button
                      onClick={handleBackToMenu}
                      className={`p-2 md:px-4 md:py-3 border border-white/20 rounded-full text-xs text-white font-bold hover:bg-white/10 transition flex items-center justify-center gap-2 ${isFullscreen ? 'md:w-full' : ''}`}
                    >
                      <Grid size={16} /> <span className="hidden md:inline">VOLVER AL MENÚ</span>
                    </button>
                  </>
                )}
                
                <div className={`flex items-center gap-2 ${isFullscreen ? 'md:flex-col md:w-full md:mt-auto' : 'ml-auto'}`}>
                  <button 
                    onClick={handleGoHome} 
                    className={`p-2 md:px-4 md:py-3 border border-[#d4af37] bg-[#d4af37] text-black rounded-full text-xs font-bold hover:bg-[#e6c353] hover:scale-105 transition flex items-center justify-center gap-2 ${isFullscreen ? 'md:w-full' : ''}`}
                  >
                    <Home size={16} /> <span className="hidden md:inline">INICIO WEB</span>
                  </button>

                  <button 
                    onClick={handleClose} 
                    className={`text-gray-400 hover:text-white transition-colors p-1 md:p-2 hover:bg-white/5 rounded-full`}
                  >
                    <X size={24} className="md:w-7 md:h-7" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className={`flex-1 relative bg-[url('/img/backgrounds/grid.png')] bg-repeat opacity-90 ${activeGame ? 'overflow-hidden' : 'overflow-y-auto custom-scrollbar'}`}>
              {!activeGame && (
                /* 🔥 CAMBIO AQUÍ: Cambiamos justify-center a justify-start y añadimos padding superior (pt-10) en móvil para que fluya hacia abajo sin cortarse */
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-8 flex flex-col items-center justify-start md:justify-center pt-10 md:pt-8">
                  <h3 className="text-gray-400 mb-6 md:mb-8 font-sans tracking-widest text-xs md:text-sm flex-shrink-0">SELECCIONA TU DESAFÍO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl pb-10 md:pb-0">
                    {games.map((game) => (
                      <motion.button
                        key={game.id}
                        whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleGameSelect(game.id)}
                        className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-[#d4af37]/10 transition-all text-center gap-3 md:gap-4 aspect-square"
                      >
                        <game.icon size={48} className={`${game.color} group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all md:w-14 md:h-14 flex-shrink-0`} />
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-white font-heading mb-1 md:mb-2">{game.name}</h4>
                          <p className="text-xs md:text-sm text-gray-400">{game.desc}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {activeGame && (
                <div className="w-full h-full bg-[#050505] flex items-center justify-center">
                  <iframe
                    src={`/games/${activeGame}/index.html`}
                    className="w-full h-full border-none block"
                    title={activeGame}
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};