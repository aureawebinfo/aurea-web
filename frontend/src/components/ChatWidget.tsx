import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "¡Hola! Soy Aura, tu asistente virtual. ¿En qué puedo ayudarte hoy?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // 1. Agregar mensaje del usuario
    const userMsg = inputText;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInputText("");

    // 2. Simular "Escribiendo..." y respuesta
    setTimeout(() => {
      let botResponse = "Gracias por escribirnos. Un asesor humano revisará tu consulta en breve.";
      
      // Respuestas simples simuladas (Aquí conectarías tu API de OpenAI en el futuro)
      if (userMsg.toLowerCase().includes('precio') || userMsg.toLowerCase().includes('costo')) {
        botResponse = "Nuestros precios varían según el proyecto. ¿Te gustaría cotizar una web específica?";
      } else if (userMsg.toLowerCase().includes('servicios')) {
        botResponse = "Ofrecemos Desarrollo Web, Apps Móviles, SEO y Automatización con IA.";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      
      {/* VENTANA DEL CHAT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[300px] md:w-[350px] bg-[#050505]/95 backdrop-blur-xl border border-[#d4af37]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header Chat */}
            <div className="bg-gradient-to-r from-[#0a3f38] to-[#050505] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center">
                  <Bot size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Aura AI</h3>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> En línea
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? 'bg-white/10 text-gray-200 rounded-tl-none' 
                        : 'bg-[#d4af37] text-black font-medium rounded-tr-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black/50 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]/50"
                />
                <button 
                  type="submit"
                  className="p-2 bg-[#d4af37] text-black rounded-full hover:scale-105 transition-transform"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE (TRIGGER) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#d4af37] text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center relative group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Tooltip */}
        {!isOpen && (
           <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             ¡Hablemos!
           </span>
        )}
      </motion.button>
    </div>
  );
};