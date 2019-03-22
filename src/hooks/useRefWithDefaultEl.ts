import { useRef } from "react";

export const useRefWithDefaultEl = () => {
  const itemLeftEl = useRef<HTMLDivElement>(null);
  const itemRightEl = useRef<HTMLDivElement>(null);
  const diagramContainerEl = useRef<HTMLDivElement>(null);

  return {
    itemLeftEl,
    itemRightEl,
    diagramContainerEl
  };
};
