import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, y = 24, className = '', once = true, amount = 0.25 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '-40px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MaskReveal({ children, delay = 0, className = '' }) {
  return (
    <span className={`block overflow-hidden ${className}`} style={{ lineHeight: 1 }}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
        className="block"
        style={{ lineHeight: 1 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
