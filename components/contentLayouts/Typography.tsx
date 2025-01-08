import React from "react";

function Typography({
  title,
  heading,
  subhead,
  content,
  children, // Correct spelling here
}: {
  title: string;
  heading?: string;
  subhead?: string;
  content?: string;
  children?: React.ReactNode; // Correct spelling here
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* text */}
      <div className="flex flex-col gap-4">
        <h5 className="uppercase text-light_accent">{title}</h5>
        <h3 className="mb-2 font-extrabold capitalize text-dark">{heading}</h3>
        {subhead && <p className="font-normal text_big text-dark">{subhead}</p>}
        <p className="font-normal tracking-normal text-left text-dark_gray text_gray text-wrap">
          {content}
        </p>
      </div>
      {/* jsx children */}
      <div>{children}</div>
    </div>
  );
}

export default Typography;
