import { ComponentType } from "react";

import { Metadata } from "next";

import { pages } from "../config/home";

export type TagConfig = {
  name: string;
  color: string;
};

export type PageConfig = {
  name: string;
  slug: string;
  description: string;
  component: ComponentType<unknown>;
  tags?: string[];
};

export type PageInfo = {
  current?: PageConfig;
  next: PageConfig;
  metadata?: Metadata;
};

export const getPageInfo = (currentPage?: string): PageInfo => {
  if (!currentPage) {
    return {
      next: pages[0],
    };
  }

  const currentPageIndex = pages.findIndex((page) => page.slug === currentPage);

  return {
    current: pages[currentPageIndex],
    next: pages[currentPageIndex + 1] || pages[0],
    metadata: {
      title: `${pages[currentPageIndex].name} • Playground`,
      description: pages[currentPageIndex].description,
    },
  };
};
