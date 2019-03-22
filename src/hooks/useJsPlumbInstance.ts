import { useRefWithDefaultEl } from "src/hooks/useRefWithDefaultEl";
import { ConnectParams, jsPlumb, jsPlumbInstance } from "jsplumb";
import { useEffect, useState } from "react";

export const useJsPlumbInstance = ({
  ElMap,
  afterConnect,
  connectOptions = {}
}: {
  ElMap: ReturnType<typeof useRefWithDefaultEl>;
  afterConnect?: (instance: jsPlumbInstance) => void;
  connectOptions?: ConnectParams;
}) => {
  const [jsPlumbInstance, setJsPlumbInstance] = useState<jsPlumbInstance>();
  useEffect(() => {
    let instance = jsPlumb.getInstance({
      Container: ElMap.diagramContainerEl.current
    });
    setJsPlumbInstance(instance);
    instance.ready(function() {
      instance.connect({
        source: ElMap.itemLeftEl.current!,
        target: ElMap.itemRightEl.current!,
        endpoint: "Dot",
        ...connectOptions
      });
      afterConnect && afterConnect(instance);
    });
    return () => {
      instance.removeAllEndpoints(ElMap.diagramContainerEl.current!);
    };
  }, []);

  return jsPlumbInstance;
};
