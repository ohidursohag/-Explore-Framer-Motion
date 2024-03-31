
import Image from "next/image";
import { Dua } from "@/utils/types";

const DuaCard = ({ dua }:{ dua:Dua|undefined }) => {
  return (
    <div id={`dua_${dua?.dua_id}`}
    className=" p-5 w-full  rounded-xl space-y-6  gap-3">
      {/* title section  */}
      <div className="flex items-center gap-3 ">
        {/* <Image src={''} alt="Dua title icon" width={35} height={35} /> */}
        <p className="text-primary font-semibold">
          {`${dua?.id}. `} {dua?.dua_name}
        </p>
      </div>
      {/* Top description  */}
      {dua?.top && (
        <p className="text-primary-text antialiased font-medium text-justify leading-8">
          {dua?.top}
        </p>
      )}
      {/* dua arabic */}
      {dua?.dua_arabic && (
        <p
          className="text-primary-text antialiased text-justify leading-[50px] text-3xl font-medium"
          dir="rtl">
          {" "}
          {dua?.dua_arabic}{" "}
        </p>
      )}

      {/* Transliteration  */}
      {dua?.transliteration && (
        <p className="text-primary-text italic text-justify leading-8">
          <span className="font-bold ">Transliteration: </span>
          <span className="font-medium">{dua?.transliteration}</span>
        </p>
      )}
      {/* Translation  */}
      {dua?.translation && (
        <p className="text-primary-text  text-justify leading-8">
          <span className="font-bold ">Translation: </span>
          <span className="font-medium">{dua?.translation}</span>
        </p>
      )}
      {/* bottom description  */}
      {dua?.bottom && (
        <p className="text-primary-text antialiased font-medium text-justify leading-8">
          {dua?.bottom}
        </p>
      )}
      {/* Reference */}
      {dua?.refference && (
        <div className="font-semibold">
          <p className="text-primary ">Reference:</p>
          <p className="text-primary-text">{dua?.refference}</p>
        </div>
      )}
    </div>
  );
};

export default DuaCard;