import styled from "styled-components";
import { BothSideStyled } from "src/pages/editor/components/shared";

export const RightContainer = styled(BothSideStyled).attrs({
  className: "RightContainer"
})`
  width: 200px;
  border-left: 1px solid #e6e9ed;
`;
