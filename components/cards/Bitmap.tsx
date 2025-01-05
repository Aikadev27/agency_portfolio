import { purple } from "@mui/material/colors";
import Image, { StaticImageData } from "next/image";

enum colors {
  YELLOW = "yellow",
  ORANGE = "orange",
  PURPLE = "purple",
}

function Bitmap({
  bitmapImg,
  color,
  text,
  company,
}: {
  bitmapImg: StaticImageData;
  color?: string;
  text: string;
  company: string;
}) {
  const colorVariants: { [key: string]: string } = {
    purple: "bg-clr_primary_purple",
    yellow: "bg-[#F7CC47]",
    orange: "bg-[#EF6D58]",
  };

  return (
    <div className="flex gap-6">
      <div
        className={`flex items-center justify-center w-12 h-12 p-0 rounded-full ${
          colorVariants[color || "purple"]
        }`}
      >
        <Image
          src={bitmapImg}
          alt="Bitmap"
          className="object-cover"
          width={38}
          height={43}
        />
      </div>
      <div className="flex-1">
        <p className="text_gray text-light_gray text-wrap max-w-[12.5em] sm:max-w-full">
          '{text}'
        </p>
        <p className="text-light">{company}.</p>
      </div>
    </div>
  );
}

export default Bitmap;
