"use client";
import FeaturesImg from "@/assets/images/hero_images/features-hero.png";
import Image from "next/image";
import Typography from "../contentLayouts/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { useRouter } from "next/navigation";
import ServiceCard from "../cards/ServiceCard";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

function Features() {
  const checkMap: string[] = [
    "Range including technical skills",
    "Business understanding",
    "Partner on the long run",
  ];
  const router = useRouter();
  return (
    <div>
      {/* main features section */}
      <div className="flex flex-col items-center gap-6 pb-12 sm:gap-0 sm:flex-row-reverse ">
        <div className="flex-1">
          <Image
            src={FeaturesImg}
            alt="feature-hero-img"
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <Typography
            title="features"
            subhead="provides a full service range"
            heading="an experience design agency"
            content="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
          >
            <ul>
              {checkMap.map((item: string, index) => (
                <li key={index} className="flex items-center gap-8 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 p-1 text-sm text-white rounded-full bg-dark_accent">
                    <DoneIcon />
                  </span>
                  <p className="text_gray text-dark">{item}</p>
                </li>
              ))}
            </ul>
          </Typography>
        </div>
      </div>
      {/* sup features section */}
      <div className="grid grid-cols-3">
        <div className="col-span-3 sm:col-span-1">
          <Typography
            title="features"
            subhead=" long run, and work as an extension of the merchant's team."
          >
            <p
              onClick={() => router.push("#")}
              className="capitalize cursor-pointer hover:text-light_accent text-dark"
            >
              read more
            </p>
          </Typography>
        </div>
        {/* 2 card */}
        <ul className="flex flex-col col-span-3 mt-6 divide-y rounded-md sm:flex-row sm:items-end sm:col-span-2 sm:px-28 sm:mt-0 sm:divide-y-0 sm:divide-x">
          <li className="flex-1 ">
            <ServiceCard
              icon={<CardMembershipIcon />}
              link="#"
              text="long run, and work as an extension of the merchant's team."
              title="Professional"
              show_icon={true}
              is_bg_color={true}
            />
          </li>
          <li className="flex-1 border border-secondary_section_border">
            <ServiceCard
              title="accessibility"
              text="business understanding, anility to put themselves"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
