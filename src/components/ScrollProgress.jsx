import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.4 });
  return (
    <div className="scroll-progress" aria-hidden>
      <motion.div className="scroll-progress-bar" style={{ scaleX: x }} />
    </div>
  );
}
