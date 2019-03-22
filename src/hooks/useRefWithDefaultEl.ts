import { useRef } from "react";

export const useRefWithDefaultEl = () => {
  const itemLeftRef = useRef<HTMLDivElement>(null);
  const itemRightRef = useRef<HTMLDivElement>(null);
  const itemBottomRef = useRef<HTMLDivElement>(null);
  const diagramContainerRef = useRef<HTMLDivElement>(null);

  return {
    itemLeftRef,
    itemRightRef,
    itemBottomRef,
    diagramContainerRef
  };
};
