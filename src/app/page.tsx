import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      {/* <Link href={"/animated-counter"} className="text-xl text-green-500">
        Animated Counter <FaExternalLinkAlt size={25} />
      </Link> */}
      <Link href={"/resizeable-panel"} className="text-xl text-green-500 flex justify-center items-center gap-5">
        Resizeable Panel <FaExternalLinkAlt size={25} />
      </Link>
      <Link href={"/facebook-menu"} className="text-xl text-green-500 flex justify-center items-center gap-5">
        Facebook menu <FaExternalLinkAlt size={25} />
      </Link>
    </div>
  );
}
