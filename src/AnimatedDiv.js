import { motion, useAnimation } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedDivProps {
  children: ReactNode;
  duration?: number;
}

const AnimatedDiv = ({ children, duration = 1.2 }: AnimatedDivProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
