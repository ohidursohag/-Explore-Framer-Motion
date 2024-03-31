// "use client"
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";

const PanelResizeable = ({
  children,
  currentDuaID,
  previousDuaID,
}: {
  children: ReactNode;
  currentDuaID?: number | undefined;
  previousDuaID?: number | undefined;
}) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      className="relative overflow-hidden"
      animate={{
        height: height,
      }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            x:
              previousDuaID! <= currentDuaID!
                ? 1000
                : -1000
                
          }}
          animate={{ x: 0 }}
          exit={{
            x: previousDuaID! <= currentDuaID!
            ? -1000
            : 1000,
          }}>
          <div
            ref={ref}
            className={`px-10 pb-4  ${height ? "absolute" : "relative"}`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

/*
   Replacer function to JSON.stringify that ignores
   circular references and internal React properties.
 
   https://github.com/facebook/react/issues/8669#issuecomment-531515508
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

export default PanelResizeable;
