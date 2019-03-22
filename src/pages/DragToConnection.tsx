import { useRefWithDefaultEl } from "src/hooks";
import {
  DiagramContainer,
  Item,
  ItemBottom,
  ItemRight
} from "src/shared-styled/Layout";
import React, { useEffect } from "react";
import { jsPlumb, EndpointOptions, ElementGroupRef } from "jsplumb";

export const DragToConnection = () => {
  const ElMap = useRefWithDefaultEl();

  useEffect(() => {
    let instance = jsPlumb.getInstance({
      Container: ElMap.diagramContainerRef.current
    });

    instance.ready(() => {
      const addEndpoint = (el: ElementGroupRef, params: EndpointOptions) => {
        let common = {
          isSource: true,
          isTarget: true,
          connector: "Straight"
        };
        instance.addEndpoint(el, params, common);
      };
      // 增加点
      addEndpoint(ElMap.itemLeftRef.current!, { anchor: "Bottom" });

      addEndpoint(ElMap.itemLeftRef.current!, {
        anchor: "Right"
      });

      addEndpoint(ElMap.itemRightRef.current!, {
        anchor: "Left"
      });
      addEndpoint(ElMap.itemBottomRef.current!, { anchor: "Top" });
    });
    return () => {
      instance.removeAllEndpoints(ElMap.diagramContainerRef.current!);
    };
  }, []);

  return (
    <>
      <h3>给连线设置不同的颜色，设置不同的粗细之类的</h3>
      <DiagramContainer ref={ElMap.diagramContainerRef}>
        <Item ref={ElMap.itemLeftRef} draggable />
        <ItemRight ref={ElMap.itemRightRef} draggable />
        <ItemBottom ref={ElMap.itemBottomRef} draggable />
      </DiagramContainer>
    </>
  );
};
