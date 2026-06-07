'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const ease = [0.25, 0.4, 0.25, 1] as const;

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function AnimateInView({ children, delay = 0, duration = 0.65, y = 24, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
