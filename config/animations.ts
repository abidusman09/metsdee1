import { MotionProps } from "framer-motion";

export const animations: Record<string, MotionProps> = {
  slideIn: {
    initial: { opacity: 0, translateY: 50 },
    whileInView: { opacity: 1, translateY: 0 },
    viewport: { once: true, amount: "all" },
    transition: { duration: 0.3 },
  },
};
