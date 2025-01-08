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
  theme,
}: {
  bitmapImg: StaticImageData;
  color?: string;
  text: string;
  company: string;
  theme: string;
}) {
  const colorVariants: { [key: string]: string } = {
    purple: "bg-clr_primary_purple",
    yellow: "bg-[#F7CC47]",
    orange: "bg-[#EF6D58]",
  };
  const textTheme: { [key: string]: string } = {
    light: "text_gray text-light_gray",
    dark: "text-dark text_gray",
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
        <p
          className={`text-wrap  max-w-full ${
            textTheme[theme || "light"]
          } mb-4`}
        >
          '{text}'
        </p>
        <p
          className={`${theme === "light" ? " text-light_gray" : "text-dark"}`}
        >
          {company}.
        </p>
      </div>
    </div>
  );
}

export default Bitmap;
