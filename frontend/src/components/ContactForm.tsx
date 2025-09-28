// ContactForm.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import DynamicIcon from './DynamicIcon';

const countryCodes = [
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+1', country: 'Estados Unidos', flag: '🇺🇸' },
  { code: '+52', country: 'México', flag: '🇲🇽' },
  { code: '+34', country: 'España', flag: '🇪🇸' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+55', country: 'Brasil', flag: '🇧🇷' },
  { code: '+51', country: 'Perú', flag: '🇵🇪' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+507', country: 'Panamá', flag: '🇵🇦' },
  { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
  { code: '+33', country: 'Francia', flag: '🇫🇷' },
  { code: '+49', country: 'Alemania', flag: '🇩🇪' },
  { code: '+39', country: 'Italia', flag: '🇮🇹' },
];

export default function ContactForm() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '+57',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        country: formData.country,
        phone: formData.phone,
        message: formData.message,
        to_email: 'aureawebinfo@gmail.com'
      };

      await emailjs.send(
        'service_fez450d',
        'template_2gc9kmk',
        templateParams,
        '1zLasq5F6TbePRnDX'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', country: '+57', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-amber-400/30"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(254,243,199,0.05) 100%)'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-6 text-center"
      >
        <DynamicIcon icon="Mail" size="md" className="inline-block mr-2" /> Escríbenos
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
            placeholder="Tu nombre"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
            placeholder="tu@email.com"
          />
        </motion.div>

        {/* Teléfono con código de país */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-3 gap-3"
        >
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
              País
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-3 bg-white/50 dark:bg-gray-800/50 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
              Número de teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300"
              placeholder="300 123 4567"
            />
          </div>
        </motion.div>

        {/* Mensaje */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300 resize-none"
            placeholder="Cuéntanos cómo podemos ayudarte..."
          />
        </motion.div>

        {/* Botón de enviar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="pt-2"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-amber-300 disabled:to-amber-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <DynamicIcon icon="Hourglass" size="sm" className="inline-block mr-2" /> Enviando...
              </>
            ) : (
              <>
                <DynamicIcon icon="Send" size="sm" className="inline-block mr-2" /> Enviar mensaje
              </>
            )}
          </button>
        </motion.div>

        {/* Mensaje de estado */}
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg text-center ${
              submitStatus === 'success' 
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
            }`}
          >
            {submitStatus === 'success' 
              ? '✅ Mensaje enviado correctamente' 
              : '❌ Error al enviar el mensaje'}
          </motion.div>
        )}
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="mt-4 text-center"
      >
        <p className="text-xs text-amber-600/70 dark:text-amber-400/70">
          Te responderemos en menos de 24 horas
        </p>
      </motion.div>
    </motion.div>
  );
}