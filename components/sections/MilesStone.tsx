import React from "react";

interface ImpactNumber {
  number: string | number;
  text: string | number;
}
function MilesStone() {
  const impactNumbers: ImpactNumber[] = [
    { number: "42%", text: "Years of experience" },
    { number: "73+", text: "Agency member" },
    { number: "5.000", text: "Projects complete" },
  ];
  return (
    <ul className="grid items-center grid-cols-3 bg-transparent border divide-y sm:divide-y-0 sm:divide-x rounded-l-md rounded-r-md divide-solid divide-secondary_section_border border-secondary_section_border">
      {impactNumbers.map((item: ImpactNumber, index: number) => (
        <li
          className="flex flex-col items-start col-span-3 gap-3 px-12 py-10 sm:col-span-1 "
          key={index}
        >
          <h3 className="font-extrabold text-dark">{item.number}</h3>
          <p className="text-dark text_big text-wrap">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default MilesStone;
