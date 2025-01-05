"use client";
import { useRouter } from "next/navigation";
import React from "react";

function FooterInfo() {
  const router = useRouter();

  return (
    <div className="items-center justify-between block py-12 sm:flex">
      <div className="flex items-center justify-center sm:block">
        <p className="text-center select-none max-w-52 text-wrap sm:max-w-full text_gray text-dark_gray ">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </p>
      </div>
      <ul className="flex justify-between sm:justify-start sm:gap-14 ">
        <li
          className="capitalize cursor-pointer hover:text-light_accent text-dark"
          onClick={() => router.push("/")}
        >
          <p>Term of Use</p>
        </li>
        <li
          className="capitalize cursor-pointer hover:text-light_accent text-dark"
          onClick={() => router.push("/")}
        >
          <p>Privacy Policy</p>
        </li>
      </ul>
    </div>
  );
}

export default FooterInfo;
