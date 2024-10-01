"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const TextTransitionUp = (props: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    else if(props.immidiate)
      mainControls.start("visible");

  }, [isInView, mainControls]);

  const parentVariants = {
    hidden: { opacity: 0,y:100 },
    visible: {
      opacity: 1, y:0,
      transition: {duration: .5,  ease: "linear", delay:props.delay}
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

export default TextTransitionUp;
