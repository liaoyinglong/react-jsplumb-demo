import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer, Item, ItemRight } from "src/shared-styled/Layout";
import React from "react";

export const Draggable = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance({
    ElMap,
    afterConnect: instance => {
      instance.draggable(ElMap.itemLeftRef.current!);
      instance.draggable(ElMap.itemRightRef.current!);
    }
  });

  return (
    <>
      <p>想要拖拽的元素必须设置成 `absolute`</p>
      <DiagramContainer ref={ElMap.diagramContainerRef}>
        <Item ref={ElMap.itemLeftRef} draggable />
        <ItemRight ref={ElMap.itemRightRef} draggable />
      </DiagramContainer>
    </>
  );
};
