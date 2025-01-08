"use client";
import React from "react";
import Typography from "../contentLayouts/Typography";
import HomeAboutImg from "@/assets/images/hero_images/home-about.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HomeAbout() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-0 sm:flex-row ">
      <div className="flex-1">
        <Image src={HomeAboutImg} alt="home-about" className="object-cover" />
      </div>
      <div className="flex-1 sm:px-24">
        <Typography
          title="about"
          subhead="Provides a full service range"
          heading="an experience design agency"
          content="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        >
          <button
            onClick={() => router.push("/about")}
            className="font-extrabold bg-white shadow-sm btn btn_big text-dark"
          >
            about us
          </button>
        </Typography>
      </div>
    </div>
  );
}

export default HomeAbout;
