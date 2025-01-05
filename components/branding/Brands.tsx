"use client";
// import { Bitmap1, Bitmap2, Bitmap3, Bitmap4, Bitmap5 } from "../svgs";

import Image from "next/image";

function Brands() {
  return (
    <ul className="flex flex-wrap items-center justify-center py-6 border-b sm:justify-between sm:flex-nowrap sm:py-12 border-secondary_section_border">
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src="Bitmap1.svg" alt="bitmap1" width={100} height={30} />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image width={100} height={30} src="Bitmap2.svg" alt="bitmap2" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image width={100} height={30} src="Bitmap3.svg" alt="bitmap3" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image width={100} height={30} src="Bitmap4.svg" alt="bitmap4" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image width={100} height={30} src="Bitmap5.svg" alt="bitmap4" />
      </li>
    </ul>
  );
}

export default Brands;
