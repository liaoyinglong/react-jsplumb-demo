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
      instance.draggable([ElMap.itemLeftEl.current, ElMap.itemRightEl.current]);
    }
  });

  return (
    <>
      <ul>
        <li>
          <h3>给连线设置不同的颜色，设置不同的粗细之类的</h3>
          <pre>
            {`
              paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
              endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 }
             `}
          </pre>
        </li>
      </ul>
      <DiagramContainer ref={ElMap.diagramContainerEl}>
        <Item ref={ElMap.itemLeftEl} draggable />
        <ItemRight ref={ElMap.itemRightEl} draggable />
      </DiagramContainer>
    </>
  );
};
