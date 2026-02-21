import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, Sparkles, Loader2 } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    {
      text: "¡Hola! Soy Aura. Pregúntame sobre diseño web, precios o tecnología.",
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      // 👇 AGREGA ESTO
      console.log("Status:", response.status);

      const data = await response.json();

      // 👇 Y ESTO
      console.log("Respuesta del backend:", data);

      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      console.log("Error:", error); // 👈 también útil
      setMessages((prev) => [
        ...prev,
        {
          text: "Lo siento, no puedo conectar con el servidor.",
          isBot: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[320px] md:w-[350px] bg-[#050505]/95 backdrop-blur-xl border border-[#d4af37]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px]"
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#0a3f38] to-[#050505] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a7018] flex items-center justify-center shadow-lg">
                  <Bot size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm flex items-center gap-2">
                    Aura AI <Sparkles size={12} className="text-[#d4af37]" />
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-medium tracking-wide">
                    Potenciada por Gemini
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* CHAT AREA */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-[url('/img/backgrounds/grid.png')] bg-repeat opacity-90">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.isBot
                        ? "bg-[#1a1a1a] border border-white/10 text-gray-200 rounded-tl-none"
                        : "bg-[#d4af37] text-black font-medium rounded-tr-none shadow-lg"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1a1a1a] border border-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2
                      size={16}
                      className="text-[#d4af37] animate-spin"
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-3 bg-black/80 border-t border-white/10 backdrop-blur-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#d4af37]/50 placeholder:text-gray-600"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2 bg-[#d4af37] text-black rounded-full hover:scale-110 transition-transform disabled:opacity-50 disabled:scale-100"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#8a7018] text-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center z-[9999]"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};
