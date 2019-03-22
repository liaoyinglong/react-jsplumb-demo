import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer, Item, ItemRight } from "src/shared-styled/Layout";
import React from "react";

export const Draggable = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance({
    ElMap,
    afterConnect: instance => {
      instance.draggable(ElMap.itemLeftEl.current!);
      instance.draggable(ElMap.itemRightEl.current!);
    }
  });

  return (
    <>
      <p>想要拖拽的元素必须设置成 `absolute`</p>
      <DiagramContainer ref={ElMap.diagramContainerEl}>
        <Item ref={ElMap.itemLeftEl} draggable />
        <ItemRight ref={ElMap.itemRightEl} draggable />
      </DiagramContainer>
    </>
  );
};
