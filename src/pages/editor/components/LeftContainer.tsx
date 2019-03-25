import styled from 'styled-components';
import { BothSideStyled } from 'src/pages/editor/components/shared';

export const LeftContainer = styled(BothSideStyled).attrs({
  className: "LeftContainer"
})`
  width: 200px;
  border-right: 1px solid #e6e9ed;
`;