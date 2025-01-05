"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Services", path: "/service" },
    { label: "Blog", path: "/blog" },
  ];
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className="sticky top-0  flex items-center justify-between bg-primary_section_bg layout_padding z-[200]">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="logo.svg" alt="Logo" width={48} height={48} />
        <h4 className="font-bold text-light">Agency</h4>
      </div>
      <ul className="items-center justify-around hidden basis-1/2 text-light sm:flex">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer text-light text_link"
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <button
        onClick={() => router.push("/contact")}
        className="hidden btn_big btn_border text-light sm:block"
      >
        contact
      </button>
      {/* responsive icon */}
      <div>
        <p className="p-2 text-white duration-200 ease-out border border-gray-600 rounded-md cursor-pointer sm:hidden hover:text-light_accent hover:bg-clr_responsive_panel">
          {isOpenMenu ? (
            <CloseIcon onClick={() => setIsOpenMenu(false)} />
          ) : (
            <MenuIcon onClick={() => setIsOpenMenu(true)} />
          )}
        </p>
      </div>
      {/* toggle menu */}
      <div
        className={`absolute left-0 right-0  sm:hidden bg-clr_responsive_panel transition-all ease-out duration-500 ${
          isOpenMenu
            ? "block top-full translate-y-0 opacity-100"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="px-2 font-light">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="py-2 my-1 cursor-pointer text-light text_link hover:opacity-85"
              onClick={() => {
                router.push(item.path);
                setIsOpenMenu(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            router.push("/contact");
            setIsOpenMenu(false);
          }}
          className="w-full rounded-none btn_big btn_border text-light "
        >
          contact
        </button>
      </div>
    </header>
  );
}

export default Header;
