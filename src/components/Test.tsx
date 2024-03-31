 
import { motion } from "framer-motion";
const Test = () => {
  return (
    <>
      <motion.div
        className="size-20 bg-zinc-800"
        initial={{ x: 100, scale: 0, y: 100 }}
        animate={{ x: 250, y: 0, scale: 1 }}
        exit={{ x: 100, scale: 0 }}
        transition={{
          duration: 1,
        }}
        whileHover={{ scale: 1.2, rotate: 180 }}
        whileTap={{ scale: 0.8 }}
      />

      <button>Click Me</button>
    </>
  );
};

export default Test;
