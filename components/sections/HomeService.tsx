"use client";
import Image from "next/image";
import React from "react";
import Typography from "../contentLayouts/Typography";
import HomeServiceImg from "@/assets/images/hero_images/home-service.png";
import { useRouter } from "next/navigation";
import Bitmap from "../cards/Bitmap";
import BitmapServiceImg from "@/assets/images/Bitmap-service.png";

function HomeService() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-0 sm:flex-row ">
      <div className="flex-1">
        <Image
          src={HomeServiceImg}
          alt="home-service"
          className="object-cover"
        />
      </div>
      <div className="flex-1 sm:px-24">
        <Typography
          title="service"
          subhead="Agency provides a full service range including technical skills, design, business."
          heading="Making Complex Digital Products"
        >
          <div className="mb-6">
            <Bitmap
              bitmapImg={BitmapServiceImg}
              company="Jenny Murtaugh"
              text="Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."
              color="yellow"
              theme="dark"
            />
          </div>
          <button
            onClick={() => router.push("/service")}
            className="font-extrabold bg-white shadow-sm btn btn_big text-dark"
          >
            explore
          </button>
        </Typography>
      </div>
    </div>
  );
}

export default HomeService;
