import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MessageCircle,
  User,
  AtSign,
  FileText,
  Bike,
  Phone,
} from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // --- LÓGICA SIMULADA (Aquí iría EmailJS) ---
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormState({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-24 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Empecemos tu <span className="text-[#D4AF37]">Transformación</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Estamos listos para crear algo extraordinario juntos.
          </p>
        </motion.div>

        {/* GRID CON ITEMS-STRETCH PARA IGUALAR ALTURAS */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* --- COLUMNA IZQUIERDA: FORMULARIO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            {/* 'flex-grow' hace que este contenedor ocupe todo el alto disponible */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-center flex-grow">
              <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Nombre */}
                <div className="relative">
                  <label className="text-xs text-[#D4AF37] font-bold ml-1 mb-2 block tracking-wide uppercase">NOMBRE COMPLETO</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Ej. Juan Pérez" required 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                  </div>
                </div>

                {/* Email y Teléfono */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs text-[#D4AF37] font-bold ml-1 mb-2 block tracking-wide uppercase">CORREO</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="tu@email.com" required 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs text-[#D4AF37] font-bold ml-1 mb-2 block tracking-wide uppercase">TELÉFONO</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="+57 300..." 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <label className="text-xs text-[#D4AF37] font-bold ml-1 mb-2 block tracking-wide uppercase">TU VISIÓN</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-6 text-gray-500 w-5 h-5" />
                    <textarea name="message" value={formState.message} onChange={handleChange} rows={4} placeholder="Cuéntanos brevemente qué necesitas..." required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none" ></textarea>
                  </div>
                </div>

                {/* Botón Animado */}
                <button
                  disabled={status !== "idle"}
                  className={`w-full h-16 rounded-xl font-bold text-lg relative overflow-hidden transition-all duration-300 ${
                    status === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-[#D4AF37] to-[#bfa145] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center justify-center gap-2">
                        Enviar Propuesta <Send size={20} />
                      </motion.div>
                    )}
                    {status === "submitting" && (
                      <motion.div key="submitting" className="absolute inset-0 flex items-center">
                        <div className="absolute bottom-2 left-0 w-full h-[2px] bg-black/20" />
                        <motion.div initial={{ x: "-100%" }} animate={{ x: "400%" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="relative text-black flex items-center">
                           <Bike size={36} className="text-black" />
                           <div className="absolute -top-2 -right-1 bg-white p-0.5 rounded border border-black rotate-12"><Mail size={14} className="text-black" /></div>
                           <div className="absolute top-1/2 -left-6 w-8 h-[2px] bg-black/40" />
                        </motion.div>
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center justify-center font-bold tracking-wide">
                        ¡Mensaje Entregado!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: INFO Y CONTACTO --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full gap-6"
          >
            {/* Tarjeta Info Principal (flex-grow para igualar altura con el form) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden flex flex-col justify-center flex-grow">
               
               <div className="flex justify-center mb-8">
                  <img src="/logo_aurea.png" alt="Áurea Web Logo" className="w-48 h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
               </div>
               
               <h3 className="text-2xl font-bold text-white mb-3">Contacto Directo</h3>
               <p className="text-gray-400 text-sm mb-8 px-4">Si prefieres una respuesta inmediata, nuestro canal de WhatsApp es la vía más rápida.</p>

               <div className="space-y-4 w-full">
                 {/* WhatsApp */}
                 <motion.a href="https://wa.me/573002477019" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group w-full flex items-center gap-4 bg-[#0f1f17] border border-[#1f3a2c] hover:border-[#25D366]/50 text-white p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#132a20] group-hover:bg-[#25D366] transition-all duration-300">
                        <MessageCircle size={24} className="text-[#25D366] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-wider mb-0.5">Respuesta Rápida</span>
                      <span className="block text-base font-semibold leading-noneleading-none">Escribir por WhatsApp</span>
                    </div>
                 </motion.a>

                 {/* Email */}
                 <motion.a href="mailto:aureawebinfo@gmail.com" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group w-full flex items-center gap-4 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-[#334155] hover:border-blue-400/50 text-white p-4 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#1e293b] group-hover:bg-blue-500 transition-all duration-300">
                        <Mail size={24} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] text-blue-300 font-bold uppercase tracking-wider mb-0.5">Correo Electrónico</span>
                      <span className="block text-base font-semibold leading-noneleading-none break-all sm:break-normal">aureawebinfo@gmail.com</span>
                    </div>
                 </motion.a>
               </div>
            </div>

            {/* Nota de disponibilidad (fija abajo) */}
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-900/10 border border-emerald-500/20 rounded-2xl flex-shrink-0">
               <div className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </div>
               <p className="text-sm text-emerald-400 font-medium">
                 <span className="font-bold text-white">En línea.</span> Nuestro equipo está listo para atenderte.
               </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};