import styled from "styled-components";

export const DiagramContainer = styled.div`
  padding: 20px;
  width: 80%;
  height: 200px;
  border: 1px solid gray;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Item = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
`;

export const ItemRight = styled(Item)`
  margin-left: 50px;
`;
