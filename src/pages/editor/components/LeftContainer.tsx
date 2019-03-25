import styled from "styled-components";
import { BothSideStyled } from "src/pages/editor/components/shared";
import * as React from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import { RootState } from "src/store/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentOperationType } from "src/pages/editor/action";
import { connect } from "react-redux";

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

const mapStateToProps = (state: RootState) => {
  return {
    currentOperationType: state.editorStore.currentOperationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setCurrentOperationType
    },
    dispatch
  );
};
type ILeftContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const _LeftContainer: React.FunctionComponent<ILeftContainerProps> = props => {
  return (
    <Wrapper>
      <div>
        当前操作项:
        <br />
        {props.currentOperationType}
      </div>

      {operationArr.map(item => (
        <OperationBtn
          onClick={() => props.setCurrentOperationType(item)}
          key={item}
        >
          {item}
        </OperationBtn>
      ))}
    </Wrapper>
  );
};

export const LeftContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LeftContainer);
