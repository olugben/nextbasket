import React from "react";
import { UnRatedStarIcon, RatedStarIcon } from "../icons";
const Rating = () => {
  return (
    <div className="flex items-center gap-[5px] my-[20px]">
      <RatedStarIcon />
      <RatedStarIcon />
      <RatedStarIcon />
      <RatedStarIcon />
      <UnRatedStarIcon />
    </div>
  );
};

export default Rating;
