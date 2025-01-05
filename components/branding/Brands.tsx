import Bitmap1 from "@/assets/svg/logo/Bitmap1.svg";
import Bitmap2 from "@/assets/svg/logo/Bitmap2.svg";
import Bitmap3 from "@/assets/svg/logo/Bitmap3.svg";
import Bitmap4 from "@/assets/svg/logo/Bitmap4.svg";
import Bitmap5 from "@/assets/svg/logo/Bitmap5.svg";
import Image from "next/image";

function Brands() {
  return (
    <ul className="flex flex-wrap items-center justify-center py-6 border-b sm:justify-between sm:flex-nowrap sm:py-12 border-secondary_section_border">
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src={Bitmap1} alt="bitmap1" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src={Bitmap2} alt="bitmap2" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src={Bitmap3} alt="bitmap3" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src={Bitmap4} alt="bitmap4" />
      </li>
      <li className="flex justify-center mb-8 basis-1/2 sm:mb-0">
        <Image src={Bitmap5} alt="bitmap4" />
      </li>
    </ul>
  );
}

export default Brands;
