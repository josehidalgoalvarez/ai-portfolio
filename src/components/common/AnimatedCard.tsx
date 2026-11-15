import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  inView: boolean;
  className?: string;
}

export default function AnimatedCard({
  children,
  delay = 0,
  inView,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
