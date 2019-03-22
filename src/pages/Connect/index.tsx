import React from "react";
import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer, Item, ItemRight } from "src/shared-styled/Layout";

const SimpleConnect = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance({ ElMap });

  return (
    <>
      <h2>简单连线版本</h2>
      <DiagramContainer ref={ElMap.diagramContainerEl}>
        <Item ref={ElMap.itemLeftEl} />
        <ItemRight ref={ElMap.itemRightEl} />
      </DiagramContainer>
    </>
  );
};

const DraggableConnect = () => {
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
      <h2>可拖拽的版本</h2>
      <p>想要拖拽的元素必须设置成 `absolute`</p>
      <DiagramContainer ref={ElMap.diagramContainerEl}>
        <Item ref={ElMap.itemLeftEl} style={{ position: "absolute" }} />
        <ItemRight
          ref={ElMap.itemRightEl}
          style={{ position: "absolute", left: "150px" }}
        />
      </DiagramContainer>
    </>
  );
};

export const Connect = () => {
  return (
    <div>
      <SimpleConnect />
      <hr />
      <DraggableConnect />
    </div>
  );
};
