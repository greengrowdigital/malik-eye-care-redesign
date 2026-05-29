import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1, delay: 1.4, ease: [0.85, 0, 0.15, 1] }}
      className="fixed inset-0 z-[100] bg-[var(--color-ink-deep)] text-[var(--color-bone)] flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-6"
        >
          <svg width="64" height="64" viewBox="0 0 64 64">
            <motion.ellipse
              cx="32" cy="32" rx="26" ry="16"
              fill="none" stroke="var(--color-bone)" strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: [0.6, 0.05, 0.1, 1] }}
            />
            <motion.circle
              cx="32" cy="32" r="11"
              fill="var(--color-bone)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ transformOrigin: '32px 32px' }}
            />
            <motion.circle
              cx="32" cy="32" r="4"
              fill="var(--color-ink-deep)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              style={{ transformOrigin: '32px 32px' }}
            />
            <motion.path
              d="M8 32 Q32 14 56 32"
              fill="none" stroke="var(--color-gold)" strokeWidth="1.4" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.6, 0.05, 0.1, 1] }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display text-3xl tracking-tight"
        >
          Malik Eye Care
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="stencil text-[var(--color-gold)] mt-3"
        >
          Bringing the world into focus
        </motion.div>
      </div>
    </motion.div>
  );
}
