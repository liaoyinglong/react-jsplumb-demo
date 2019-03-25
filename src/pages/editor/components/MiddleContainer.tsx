import styled from "styled-components";
import * as React from "react";
import { useRef, useState } from "react";
import { RootState } from "src/store/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { resetToSelect } from "src/pages/editor/action";
import { connect } from "react-redux";

const Wrapper = styled.div.attrs({ className: "MiddleContainer" })`
  flex: 1;
`;

const mapStateToProps = (state: RootState) => {
  return {
    currentOperationType: state.editorStore.currentOperationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      resetToSelect
    },
    dispatch
  );
};
type IMiddleContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export const _MiddleContainer: React.FunctionComponent<
  IMiddleContainerProps
> = props => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [arr, setArr] = useState<string[]>(["1"]);

  const addChildren = (e: React.MouseEvent) => {
    console.log(e.clientX, e.clientY);
  };

  return (
    <Wrapper onClick={addChildren}>
      {arr.map(item => (
        <span key={item}>{item}</span>
      ))}
    </Wrapper>
  );
};

export const MiddleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MiddleContainer);
