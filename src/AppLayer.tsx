import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Layer = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={ref} id={id} className='relative '>
      <div style={{ transform: `translateY(${y}px)` }}>{children}</div>
    </section>
  );
};

export default Layer;
