import styled from "styled-components";

export const DiagramContainer = styled.div`
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;
  margin-top: 10px;
`;

interface ItemProps {
  draggable?: boolean;
}

export const Item = styled.div<ItemProps>`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
  ${(props: ItemProps) => (props.draggable ? " position:absolute" : "")};
`;

export const ItemRight = styled(Item)`
  margin-left: 50px;
  ${(props: ItemProps) => (props.draggable ? "left: 150px" : "")};
`;

export const ItemBottom = styled(Item)`
  margin-top: 80px;
  ${(props: ItemProps) => (props.draggable ? "bottom: 150px" : "")};
`;
