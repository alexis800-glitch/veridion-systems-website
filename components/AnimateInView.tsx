'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMounted } from '@/hooks/useMounted';

const ease: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function AnimateInView({ children, delay = 0, duration = 0.65, y = 24, className }: Props) {
  const mounted = useMounted();

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
