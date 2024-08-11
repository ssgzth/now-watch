import React from "react";
import Btn from "./Btn";

const BtnList = () => {
  const list = [
    "All",
    "Live",
    "Shorts",
    "Songs",
    "Gaming",
    "Movies",
    "Olympics",
  ];

  return (
    <div className="flex">
      {list.map((btn) => (
        <Btn key={btn} name={btn} />
      ))}
    </div>
  );
};

export default BtnList;
