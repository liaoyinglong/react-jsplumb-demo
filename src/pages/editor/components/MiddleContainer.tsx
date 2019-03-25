import styled from "styled-components";
import * as React from "react";
import { RootState } from "src/store/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { resetToSelect } from "src/pages/editor/action";
import { connect } from "react-redux";

const Wrapper = styled.div.attrs({ className: "MiddleContainer" })`
  flex: 1;
`;

const mapStateToProps = (state: RootState) => {
  return {};
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
  return (
    <Wrapper onClick={() => props.resetToSelect()}>MiddleContainer</Wrapper>
  );
};

export const MiddleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MiddleContainer);
