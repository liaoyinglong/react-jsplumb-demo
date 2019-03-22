import React, { useEffect } from "react";
import { jsPlumb } from "jsplumb";
import "./index.css";

export const Connect = () => {
  useEffect(() => {
    const firstInstance = jsPlumb.getInstance({
      Container: "diagramContainer"
    });
    firstInstance.ready(function() {
      firstInstance.connect({
        source: "item_left",
        target: "item_right",
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
        <div id="item_left" className="item" />
        <div id="item_right" className="item" style={{ marginLeft: "50px" }} />
      </div>
    </div>
  );
};
