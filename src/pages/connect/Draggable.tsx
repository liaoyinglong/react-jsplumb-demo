import { useJsPlumbInstance, useRefWithDefaultEl } from "src/hooks";
import { DiagramContainer } from "src/shared-styled/Layout";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";

const Item = styled.div.attrs({ className: "item" })`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
  position: absolute;
`;

export const Draggable = () => {
  const ElMap = useRefWithDefaultEl();
  const [arr, setArr] = useState([
    { left: "50px", top: "50px", label: "item1" },
    { left: "250px", top: "50px", label: "item2" }
  ]);

  const instance = useJsPlumbInstance({
    ElMap,
    afterConnect: instance => {
      ElMap.diagramContainerRef
        .current!.querySelectorAll(".item")
        .forEach(item => {
          instance.draggable(item);
        });
    }
  });
  useEffect(() => {
    if (instance) {
      ElMap.diagramContainerRef
        .current!.querySelectorAll(".item")
        .forEach(item => {
          if (item.classList.contains("jtk-draggable")) return;
          instance.draggable(item);
          console.log(item);
        });
    }
  }, [arr]);

  useEffect(() => {
    const observer = new MutationObserver(mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type == "attributes") {
          const {
            style: { left, top }
          } = mutation.target as HTMLDivElement;
          let index = +(mutation.target as HTMLDivElement).dataset
            .index! as number;

          if (index) {
            arr[index] = {
              ...arr[index],
              left: left!,
              top: top!
            };
            setArr(arr);
          }
        }
      }
    });
    observer.observe(ElMap.diagramContainerRef.current!, {
      attributes: true,
      childList: true,
      subtree: true
    });
    return () => {
      observer.disconnect();
      console.log(arr);
    };
  }, [arr]);
  console.log("rerender");
  return (
    <>
      <DiagramContainer ref={ElMap.diagramContainerRef}>
        {arr.map((item, index) => (
          <Item
            key={item.label}
            style={{ left: item.left, top: item.top }}
            data-index={index}
          >
            {item.label}
          </Item>
        ))}
      </DiagramContainer>
      <br />
      <Button onClick={() => console.log(arr)} htmlType="button">
        log
      </Button>

      <Button
        onClick={() =>
          setArr([...arr, { left: "350px", top: "350px", label: "item3" }])
        }
        htmlType="button"
      >
        push
      </Button>
    </>
  );
};
