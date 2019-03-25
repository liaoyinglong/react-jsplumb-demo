import styled from "styled-components";

export const DiagramContainer = styled.div`
  padding: 20px;
  width: 80vw;
  height: 50vh;
  position: relative;
  border: 1px solid #000;
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
  ${(props: ItemProps) =>
    props.draggable ? "left: 150px" : "margin-left: 50px"};
`;

export const ItemBottom = styled(Item)`
  ${(props: ItemProps) =>
    props.draggable ? "bottom: 150px" : " margin-top: 80px"};
`;
