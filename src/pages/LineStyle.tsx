import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer, Item, ItemRight } from "src/shared-styled/Layout";
import React from "react";

export const LineStyle = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance({
    ElMap,
    connectOptions: {
      paintStyle: { stroke: "lightgray", strokeWidth: 3 },
      endpointStyle: {
        fill: "yellow",
        outlineStroke: "darkgray",
        outlineWidth: 3
      },
      overlays: [["Arrow", { width: 12, length: 12, location: 0.5 }]]
    },
    afterConnect: instance => {
      instance.draggable([ElMap.itemLeftRef.current, ElMap.itemRightRef.current]);
      instance.addEndpoint(ElMap.itemLeftRef.current!, {
        anchors: ["Right"]
      });
    }
  });

  return (
    <>
      <h3>给连线设置不同的颜色，设置不同的粗细之类的</h3>
      <DiagramContainer ref={ElMap.diagramContainerRef}>
        <Item ref={ElMap.itemLeftRef} draggable />
        <ItemRight ref={ElMap.itemRightRef} draggable />
      </DiagramContainer>
    </>
  );
};
