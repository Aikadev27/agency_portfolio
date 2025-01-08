"use client";

import { useState } from "react";

function ServiceCard({
  icon,
  title,
  text,
  link,
  text_link,
  show_icon,
  is_bg_color,
}: {
  icon?: React.ReactElement;
  title?: string;
  text?: string;
  link?: string;
  text_link?: string;
  show_icon?: boolean;
  is_bg_color?: boolean;
}) {
  const [showIcon, setShowIcon] = useState<boolean>(show_icon || false);

  const handleOneMouseEnter = () => {
    if (show_icon !== false) {
      setShowIcon(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (show_icon !== true) {
      setShowIcon(false);
    }
  };

  return (
    <div
      className={`box-border relative w-full px-8 py-6 rounded-md transition-all duration-500 cursor-pointer  bg-transparent  ${
        is_bg_color ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={handleOneMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {/* Icon */}
      {icon && (
        <div
          className={`rounded-t-md absolute bg-transparent inset-x-0 flex items-center px-8 pt-3 justify-start transition-all duration-400  ${
            is_bg_color ? "bg-white" : "bg-transparent"
          }  ${showIcon ? "-top-1/2 opacity-100" : "top-1/2 opacity-0 "}`}
        >
          <div className="flex items-center justify-center w-20 h-20 text-white rounded-full bg-dark_accent">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-start gap-6 sm:gap-4">
        <h4 className="font-bold text-dark first-letter:uppercase">{title}</h4>
        <p className="text_gray text-dark text_small first-letter:uppercase">
          {text}
        </p>
        <p className="capitalize cursor-pointer text-dark hover:text-light_accent">
          {text_link}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
