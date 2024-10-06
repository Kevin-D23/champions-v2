"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const TextTransitionRight = (props: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const parentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: "linear", delay: props.delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={mainControls}
      className={"transition " + props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default TextTransitionRight;
