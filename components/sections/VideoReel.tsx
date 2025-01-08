"use client";

import VideoBg from "@/assets/images/videoBg.png";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/navigation";
import Typography from "../contentLayouts/Typography";
function VideoReel() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-start gap-8 sm:items-center sm:flex-row ">
      {/* Video */}
      <div className="flex-1 w-full h-full">
        <div className="relative  sm:max-w-[570px] sm:max-h-[368px] ">
          <Image
            src={VideoBg}
            alt="rickrollVideo"
            className="block object-cover w-full h-full"
          />
          <div
            className="absolute z-30 flex items-center justify-center text-white transition-all -translate-x-1/2 -translate-y-1/2 border border-white rounded-full cursor-pointer top-1/2 left-1/2 w-36 h-36 hover:bg-light_accent hover:bg-opacity-25 border-opacity-65"
            onClick={() =>
              router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
          >
            <PlayArrowIcon />
          </div>
          <div className="absolute inline-block px-2 py-1 text-center text-white bg-black rounded-md bottom-2 left-3 backdrop-blur-lg bg-opacity-30 text_small">
            <p>1:45</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-0 sm:px-32 sm:py-12">
        <Typography
          title="video reel"
          heading="unlock the greatest value possible"
          content=" design, business understanding, ability to put themselves in the merchant's shoes meant to partner"
        />
      </div>
    </div>
  );
}

export default VideoReel;
