import React, { useEffect, useRef, useState } from "react";
import { jsPlumb, jsPlumbInstance } from "jsplumb";

import styled from "styled-components";

const DiagramContainer = styled.div`
  padding: 20px;
  width: 80%;
  height: 200px;
  border: 1px solid gray;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Item = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
`;

const ItemRight = styled(Item)`
  margin-left: 50px;
`;

const useRefWithDefaultEl = () => {
  const itemLeftEl = useRef<HTMLDivElement>(null);
  const itemRightEl = useRef<HTMLDivElement>(null);
  const diagramContainerEl = useRef<HTMLDivElement>(null);

  return {
    itemLeftEl,
    itemRightEl,
    diagramContainerEl
  };
};

const useJsPlumbInstance = (
  ElMap: ReturnType<typeof useRefWithDefaultEl>,
  callback?: (instance: jsPlumbInstance) => void
) => {
  const [jsPlumbInstance, setJsPlumbInstance] = useState<jsPlumbInstance>();
  useEffect(() => {
    let instance = jsPlumb.getInstance({
      Container: ElMap.diagramContainerEl.current
    });
    setJsPlumbInstance(instance);
    instance.ready(function() {
      instance.connect({
        source: ElMap.itemLeftEl.current!,
        target: ElMap.itemRightEl.current!,
        endpoint: "Dot"
      });
      callback && callback(instance);
    });
    return () => {
      instance.removeAllEndpoints(ElMap.diagramContainerEl.current!);
    };
  }, []);

  return jsPlumbInstance;
};

const SimpleConnect = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance(ElMap);

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

  useJsPlumbInstance(ElMap, instance => {
    instance.draggable(ElMap.itemLeftEl.current!);
    instance.draggable(ElMap.itemRightEl.current!);
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
