import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
type Resize = {
  children: ReactNode;
  slideDirection:"forword" | "backword"|null
};

const ResizeDropdown = ({ children,slideDirection }: Resize) => {
  const [ref, { height }] = useMeasure();
//   console.log(slideDirection)
  return (
    <motion.div
      className="relative overflow-hidden w-full"
      animate={{ height: height }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            x:slideDirection==='forword'? 384:-384,
          }}
          animate={{ x: 0 }}
          exit={{ x: slideDirection==='forword'? 384:-384 }}
          >
          <div ref={ref} className={` w-full ${height ? "absolute" : "relative"}`}>
            {" "}
            {children}{" "}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
/*
   Replacer function to JSON.stringify that ignores
   circular references and internal React properties.
 */
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

export default ResizeDropdown;
