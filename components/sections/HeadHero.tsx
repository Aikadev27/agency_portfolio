"use client";

import { useRouter } from "next/navigation";
import HeadHeroImg from "@/assets/images/hero_images/head_hero.png";
import Image from "next/image";
import Bitmap from "../cards/Bitmap";
import BitmapImg from "@/assets/images/Bitmap.png";

function HeadHero() {
  const router = useRouter();
  return (
    <div className="flex-row-reverse items-center justify-center block w-full  sm:flex bg-primary_section_bg sm:px-[135px] px-[32px] py-12">
      {/* hero */}
      <div className="flex items-center justify-center flex-1">
        <Image src={HeadHeroImg} alt="Head hero" />
      </div>
      {/* text */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 sm:gap-8">
          <h5 className="uppercase text-light_accent">modern studio</h5>
          <div>
            <h2 className="hidden font-extrabold text-white sm:block">
              We're Help <br /> To Build Your <br /> Dream Project
            </h2>
            <h3 className="block font-extrabold text-white sm:hidden">
              We're Help <br /> To Build Your Dream Project
            </h3>
          </div>
          <p className="tracking-wider text-light_gray text_gray">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
        {/* 2button */}
        <div className="flex items-center justify-between gap-6 mb-10 sm:justify-start sm:mb-20">
          <button
            className="text-white bg-light_accent btn_big mt-7 sm:mt-10"
            onClick={() => router.push("#")}
          >
            how we work
          </button>
          <button
            className="text-white bg-transparent btn_big mt-7 sm:mt-10"
            onClick={() => router.push("/contact")}
          >
            contact us
          </button>
        </div>
        <div className="">
          <Bitmap
            bitmapImg={BitmapImg}
            text="Put themselves in the merchant's shoes"
            company="Meta Inc"
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default HeadHero;
