"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, animate, motion } from "framer-motion";
import { duas } from "@/utils/duas";
import PanelResizeable from "./PanelResizeable";
import DuaCard from "../cards/DuaCard";
import { Dua } from "@/utils/types";
const MyResizeablePanel = () => {
  const [duaID, setDuaID] = useState<number>(duas[0].id);
  const [previousDuaID, setPreviousDuaID] = useState<number>(duas[0].id);
  const [currentDua, setCurrentDua] = useState<Dua | undefined>(duas[0]);
  useEffect(() => {
    const selectedDua: Dua | undefined = duas.find((dua) => dua?.id === duaID);
    setCurrentDua(selectedDua);
  }, [duaID]);

  let duration = 1;
  const getNextDua = () => {
    if (duaID >= 1 && duaID < duas.length) {
      setDuaID((previous) => {
        setPreviousDuaID(previous);
        return previous + 1;
      });
    }
  };
  const getPreviousDua = () => {
    if (duaID > 1) {
      setDuaID((previous) => {
        setPreviousDuaID(previous);
        return previous - 1;
      });
    }
  };
  return (
    <MotionConfig transition={{ duration: duration }}>
      <div className="flex min-h-screen flex-col  p-10 w-[1000px] rounded-lg">
        <div className="mx-auto mt-8 h-full w-full  border  rounded-lg shadow-2xl pt-8">
          <h1 className="mb-8 text-center text-3xl font-thin">দোয়ার-গুরুত্ব</h1>
          <div className="mb-8 flex justify-between px-8">
            <motion.button
              whileTap={duaID !== duas.at(0)?.id ?{ scale: 0.8 }:{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={duaID !== duas.at(0)?.id ?{ rotate: "-3deg", scale: 1.1 }:{ rotate: 0, scale: 1 }}
              className="border px-4 py-2 bg-green-600 text-white shadow-md rounded-lg text-lg disabled:bg-slate-600 disabled:cursor-not-allowed"
              disabled={duaID === duas.at(0)?.id ? true : false}
              onClick={getPreviousDua}>
              Previous
            </motion.button>
            <motion.button
              whileTap={duaID !== duas.at(-1)?.id ?{ scale: 0.8 }:{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={duaID !== duas.at(-1)?.id ?{ rotate: "3deg", scale: 1.1 }:{ rotate: 0, scale: 1 }}
              className={`border px-8 py-2 bg-green-600 text-white shadow-md rounded-lg text-lg disabled:bg-slate-600 disabled:cursor-not-allowed`}
              disabled={duaID === duas.at(-1)?.id ? true : false}
              onClick={getNextDua}>
              Next
            </motion.button>
          </div>
          <PanelResizeable currentDuaID={duaID} previousDuaID={previousDuaID}>
            <DuaCard dua={currentDua} />
          </PanelResizeable>
        </div>
      </div>
    </MotionConfig>
  );
};

export default MyResizeablePanel;
