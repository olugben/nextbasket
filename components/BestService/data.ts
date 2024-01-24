import React from "react";
import { ConcreteIcon, EasyWinIcon, HackGrowthIcon } from "../icons";

export interface IServiceData {
  Icon: React.ReactNode;
  title: string;
  description: string;
}

export const data: IServiceData[] = [
  {
    Icon: EasyWinIcon(),
    title: "Easy wins",
    description: "Get your best looking smile now!",
  },
  {
    Icon: ConcreteIcon(),
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    Icon: HackGrowthIcon(),
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];
