"use client";
import React from "react";
import FooterHeroImg from "@/assets/images/hero_images/footer_hero.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function FooterHero() {
  const router = useRouter();
  return (
    <div className="flex-row-reverse items-center justify-center block w-full rounded-md sm:flex bg-light_accent sm:px-[135px] px-[32px] py-12">
      {/* hero */}
      <div className="flex items-center justify-center flex-1">
        <Image src={FooterHeroImg} alt="Footer hero" />
      </div>
      {/* text */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 sm:gap-8">
          <div>
            <h2 className="hidden font-extrabold text-white sm:block">
              We're Help <br /> To Build Your Dream Project
            </h2>
            <h3 className="block font-extrabold text-white sm:hidden">
              We're Help <br /> To Build Your Dream Project
            </h3>
          </div>
          <p className="tracking-wider text-light_gray text_gray">
            A digital agency is a business you hire to outsource your digital
            marketing efforts. instead of handing in-house
          </p>
        </div>
        <button
          className="bg-white btn_big mt-7 sm:mt-10"
          onClick={() => router.push("/contact")}
        >
          contact us
        </button>
      </div>
    </div>
  );
}

export default FooterHero;
