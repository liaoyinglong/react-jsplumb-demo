import React, { useEffect, useRef } from "react";
import { jsPlumb } from "jsplumb";
import "./index.css";

export const Connect = () => {
  const itemLeftEl = useRef<HTMLDivElement>(null);
  const itemRightEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let firstInstance = jsPlumb.getInstance({
      Container: "diagramContainer"
    });
    firstInstance.ready(function() {
      firstInstance.connect({
        source: itemLeftEl.current!,
        target: itemRightEl.current!,
        endpoint: "Dot"
      });
    });

    return () => {
      firstInstance.removeAllEndpoints("diagramContainer");
    };
  }, []);

  return (
    <div>
      <div id="diagramContainer">
        <div ref={itemLeftEl} id="item_left" className="item" />
        <div
          ref={itemRightEl}
          id="item_right"
          className="item"
          style={{ marginLeft: "50px" }}
        />
      </div>
    </div>
  );
};
