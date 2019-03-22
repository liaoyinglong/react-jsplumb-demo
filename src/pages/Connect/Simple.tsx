import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer, Item, ItemRight } from "src/shared-styled/Layout";
import React from "react";

export const Simple = () => {
  const ElMap = useRefWithDefaultEl();

  useJsPlumbInstance({ ElMap });

  return (
    <DiagramContainer ref={ElMap.diagramContainerEl}>
      <Item ref={ElMap.itemLeftEl} />
      <ItemRight ref={ElMap.itemRightEl} />
    </DiagramContainer>
  );
};
