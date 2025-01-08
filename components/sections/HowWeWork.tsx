"use client";
import React from "react";
import Typography from "../contentLayouts/Typography";
import { useRouter } from "next/navigation";

interface Skill {
  oder: number; // hoặc 'order' nếu đây là lỗi chính tả
  skill: string;
}

function HowWeWork() {
  const router = useRouter();
  const skills: Skill[] = [
    {
      oder: 1,
      skill: "Full service range including",
    },
    {
      oder: 2,
      skill: "Technical skills, design, business",
    },
    {
      oder: 3,
      skill: "Themselves in the merchant's",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12 pb-12 border-b sm:gap-0 sm:flex-row border-secondary_section_border">
      <div className="flex-1">
        <Typography
          title="how we work"
          heading="making your projects look awesome"
          content="technical skills, design, business understanding, ability to put themselves in the merchant's shoes"
        >
          <p
            onClick={() => router.push("#")}
            className="capitalize cursor-pointer  hover:text-light_accent text-dark"
          >
            read more
          </p>
        </Typography>
      </div>
      <ul className="flex-1 px-0 mt-12 sm:px-20 sm:mt-24">
        {skills.map((item: Skill) => (
          <li key={item.oder} className="flex items-center gap-4 mb-6">
            <h1 className="font-extrabold text-dark min-w-14">{item.oder}</h1>
            <h4 className="font-bold text-wrap text-dark">{item.skill}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HowWeWork;
