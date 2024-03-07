import Link from "next/link";
import Image from "next/image";

import dateFormatting from "../../lib/DateFormatting";

type ReusableImageProps = {
  imgSrc: string | null;
  text: string | null;
  href?: string;
  whiteColor: boolean;
};

function ReusableImage({ imgSrc, text, href, whiteColor }: ReusableImageProps) {
  return (
    <>
      <div className="flex flex-col mb-10 space-y-2 sm:px-3 w-full">
        <Image src={`${imgSrc}`} width={400} height={400} alt="Image one" className="w-full object-cover"/>

        <Link
          href={href || ""}
          className={whiteColor ? "text-white font-semibold font-sourceSansProFont text-xl hover:underline hover_decoration-1 underline-offset-2" : "text-black font-semibold font-sourceSansProFont text-xl hover:underline hover_decoration-1 underline-offset-2"} 
        >
          {text}
        </Link>

        <span className={whiteColor ? "text-white font-sourceSansProFont font-medium text-xl" : "text-black font-sourceSansProFont font-medium text-xl"}> 
          {dateFormatting()}
        </span>
      </div>
    </>
  );
}

export default ReusableImage;
