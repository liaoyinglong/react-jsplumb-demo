import { useRefWithDefaultEl } from "src/hooks";
import {
  DiagramContainer,
  Item,
  ItemBottom,
  ItemRight
} from "src/shared-styled/Layout";
import React, { useEffect } from "react";
import { jsPlumb, EndpointOptions, ElementGroupRef } from "jsplumb";
import { position } from "src/shared/constant";

export const DragToConnection = () => {
  const elMap = useRefWithDefaultEl();

  useEffect(() => {
    let instance = jsPlumb.getInstance({
      Container: elMap.diagramContainerRef.current
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
      addEndpoint(elMap.itemLeftRef.current!, { anchor: position.Bottom });

      addEndpoint(elMap.itemLeftRef.current!, {
        anchor: position.Right
      });

      addEndpoint(elMap.itemRightRef.current!, {
        anchor: position.Left
      });
      addEndpoint(elMap.itemBottomRef.current!, { anchor: position.Top });

      // 设置拖动
      instance.draggable(elMap.itemBottomRef.current!);
      instance.draggable(elMap.itemLeftRef.current!);
      instance.draggable(elMap.itemRightRef.current!);
    });

    return () => {
      instance.removeAllEndpoints(elMap.diagramContainerRef.current!);
    };
  }, []);

  return (
    <>
      <h3>给连线设置不同的颜色，设置不同的粗细之类的</h3>
      <DiagramContainer ref={elMap.diagramContainerRef}>
        <Item ref={elMap.itemLeftRef} draggable />
        <ItemRight ref={elMap.itemRightRef} draggable />
        <ItemBottom ref={elMap.itemBottomRef} draggable />
      </DiagramContainer>
    </>
  );
};
