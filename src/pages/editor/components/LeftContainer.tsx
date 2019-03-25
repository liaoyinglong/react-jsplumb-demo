import styled from "styled-components";
import { BothSideStyled } from "src/pages/editor/components/shared";
import * as React from "react";
import { useState } from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

const Wrapper = styled(BothSideStyled).attrs({
  className: "LeftContainer"
})`
  width: 200px;
  border-right: 1px solid #e6e9ed;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const OperationBtn = styled(Button)<ButtonProps>`
  margin: 0 0 10px;
`;

/**
 * 操作按钮枚举
 */
export enum operationType {
  select = "选择",
  start = "开始",
  task = "任务",
  cond = "条件",
  subflow = "子流",
  link = "连线",
  end = "结束"
}

const operationArr = [
  operationType.start,
  operationType.task,
  operationType.cond,
  operationType.subflow,
  operationType.end
];

export const LeftContainer = () => {
  const [type, setType] = useState(operationType.select);
  return (
    <Wrapper>
      <div>
        当前操作项:
        <br />
        {type}
      </div>

      {operationArr.map(item => (
        <OperationBtn onClick={() => setType(item)} key={item}>
          {item}
        </OperationBtn>
      ))}
    </Wrapper>
  );
};
