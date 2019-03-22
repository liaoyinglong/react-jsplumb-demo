import React, { useEffect, useRef } from "react";
import { jsPlumb } from "jsplumb";

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

const SimpleConnect = () => {
  const itemLeftEl = useRef<HTMLDivElement>(null);
  const itemRightEl = useRef<HTMLDivElement>(null);
  const diagramContainerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let jsPlumbInstance = jsPlumb.getInstance({
      Container: diagramContainerEl.current
    });
    jsPlumbInstance.ready(function() {
      jsPlumbInstance.connect({
        source: itemLeftEl.current!,
        target: itemRightEl.current!,
        endpoint: "Dot"
      });
    });
    return () => {
      jsPlumbInstance.removeAllEndpoints(diagramContainerEl.current!);
    };
  }, []);

  return (
    <>
      <h2>简单连线版本</h2>
      <DiagramContainer ref={diagramContainerEl}>
        <Item ref={itemLeftEl} />
        <ItemRight ref={itemRightEl} style={{ marginLeft: "50px" }} />
      </DiagramContainer>
    </>
  );
};

export const Connect = () => {
  return (
    <div>
      <SimpleConnect />
      <hr />
    </div>
  );
};
