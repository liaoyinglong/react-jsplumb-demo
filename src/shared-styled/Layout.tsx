import styled from "styled-components";

export const DiagramContainer = styled.div`
  padding: 20px;
  width: 80%;
  height: 200px;
  border: 1px solid gray;
  margin-bottom: 20px;
  margin-top: 10px;
`;

interface IItemProps {
  draggable?: boolean;
}

export const Item = styled.div<IItemProps>`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
  ${(props: IItemProps) => (props.draggable ? " position:absolute" : "")};
`;

export const ItemRight = styled(Item)`
  margin-left: 50px;
  ${(props: IItemProps) => (props.draggable ? "left: 150px" : "")};
`;

export const ItemBottom = styled(Item)`
  margin-top: 80px;
  ${(props: IItemProps) => (props.draggable ? "bottom: 150px" : "")};
`;
