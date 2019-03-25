import styled from "styled-components";
import { BothSideStyled } from "src/pages/editor/components/shared";
import * as React from "react";
import { Button } from "antd";

const Wrapper = styled(BothSideStyled).attrs({
  className: "LeftContainer"
})`
  width: 200px;
  border-right: 1px solid #e6e9ed;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const OperationBtn = styled(Button)`
  margin: 0 0 10px;
`;

export const LeftContainer = () => {
  return (
    <Wrapper>
      <OperationBtn>开始</OperationBtn>
      <OperationBtn>任务</OperationBtn>
      <OperationBtn>条件</OperationBtn>
      <OperationBtn>子流程</OperationBtn>
      <OperationBtn>结束</OperationBtn>
    </Wrapper>
  );
};
