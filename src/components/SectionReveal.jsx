import { motion, useReducedMotion } from 'motion/react';

export default function SectionReveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={reduced ? undefined : { duration: 0.65, delay, ease: [0.2, 0.8, 0.2, 1] }}>{children}</motion.div>;
}
