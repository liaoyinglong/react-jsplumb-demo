import * as React from "react";
import styled from "styled-components";
import { LeftContainer } from "src/pages/editor/components/LeftContainer";
import { RightContainer } from "src/pages/editor/components/RightContainer";
import { MiddleContainer } from "src/pages/editor/components/MiddleContainer";

const BaseEditorContainer = styled.div.attrs({
  className: "BaseEditorContainer"
})`
  height: 80vh;
  display: flex;
  border-top: 1px solid #e6e9ed;
`;

export const BaseEditor = () => {
  return (
    <BaseEditorContainer>
      <LeftContainer />
      <MiddleContainer />
      <RightContainer>RightContainer</RightContainer>
    </BaseEditorContainer>
  );
};
