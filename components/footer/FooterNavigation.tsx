"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
function FooterNavigation() {
  const menuNavItems = [
    { label: "about", path: "/about" },
    { label: "services", path: "/services" },
    { label: "blog", path: "/blog" },
    { label: "contact", path: "/contact" },
  ];
  const servicesNavItems = [
    { label: "design", path: "/design" },
    { label: "development", path: "/development" },
    { label: "marketing", path: "/marketing" },
    { label: "see more", path: "/more" },
  ];
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between gap-12 pb-16 border-b border-secondary_section_border sm:flex-row sm:items-start sm:gap-0">
      <h4
        className="font-bold cursor-pointer text-dark hover:text-light_accent "
        title="back to top"
        onClick={() => router.push("#")}
      >
        Agency
      </h4>
      {/* menu */}
      <div>
        <h5 className="mb-6 uppercase text-light_accent">menu</h5>
        <ul className="flex flex-col items-center justify-center gap-2 capitalize text-dark sm:items-start">
          {menuNavItems.map((item, index) => (
            <li
              className="cursor-pointer hover:text-dark_accent"
              onClick={() => router.push(item.path)}
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {/* services */}
      <div>
        <h5 className="mb-6 uppercase text-light_accent">Services</h5>
        <ul className="flex flex-col items-center justify-center gap-2 capitalize text-dark sm:items-start">
          {servicesNavItems.map((item, index) => (
            <li
              className="cursor-pointer hover:text-dark_accent"
              key={index}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {/* social icons */}
      <ul className="flex items-center gap-2 cursor-pointer ">
        <li className="flex items-center justify-center w-12 h-12 p-2 rounded-full hover:bg-primary_section_bg bg-light_accent">
          <Image
            src="facebook.svg"
            width={12}
            height={12}
            alt="facebook icon"
          />
        </li>
        <li className="flex items-center justify-center w-12 h-12 p-2 rounded-full hover:bg-primary_section_bg bg-light_accent">
          <Image src="/twitter.svg" width={12} height={12} alt="twitter icon" />
        </li>
        <li className="flex items-center justify-center w-12 h-12 p-2 rounded-full hover:bg-primary_section_bg bg-light_accent">
          <Image
            src="instagram.svg"
            width={12}
            height={12}
            alt="instagram icon"
          />
        </li>
      </ul>
    </div>
  );
}

export default FooterNavigation;
