import * as React from "react";
import styled from "styled-components";
import { LeftContainer } from "src/pages/editor/components/LeftContainer";
import { RightContainer } from "src/pages/editor/components/RightContainer";

const BaseEditorContainer = styled.div.attrs({
  className: "BaseEditorContainer"
})`
  height: 80vh;
  display: flex;
  border-top: 1px solid #e6e9ed;
`;

const MiddleContainer = styled.div.attrs({ className: "MiddleContainer" })`
  flex: 1;
`;

export const BaseEditor = () => {
  return (
    <BaseEditorContainer>
      <LeftContainer>LeftContainer</LeftContainer>
      <MiddleContainer>MiddleContainer</MiddleContainer>
      <RightContainer>RightContainer</RightContainer>
    </BaseEditorContainer>
  );
};
