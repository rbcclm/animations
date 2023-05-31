import dynamic from "next/dynamic";

import { PageConfig } from "../utils/home";

export const pages: PageConfig[] = [
  {
    slug: "CardSpread",
    name: "Card Spread on Hover",
    description:
      "On hover, spread cards and bring the focused card to the front.",
    tags: ["animation"],
    component: dynamic(() => import("../Pages/CardSpread/page")),
  },
  {
    slug: "CardSpread",
    name: "Card Spread on Hover",
    description:
      "On hover, spread cards and bring the focused card to the front.",
    tags: ["animation"],
    component: dynamic(() => import("../Pages/CardSpread/page")),
  },
  {
    slug: "CardSpread",
    name: "Card Spread on Hover",
    description:
      "On hover, spread cards and bring the focused card to the front.",
    tags: ["animation"],
    component: dynamic(() => import("../Pages/CardSpread/page")),
  },
];
