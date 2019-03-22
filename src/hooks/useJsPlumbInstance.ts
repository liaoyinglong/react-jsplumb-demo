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
      // 第二个参数是默认配置项 会跟 第一个参数merge
      instance.connect(connectOptions, {
        source: ElMap.itemLeftEl.current!,
        target: ElMap.itemRightEl.current!,
        endpoint: "Dot"
      });
      afterConnect && afterConnect(instance);
    });
    return () => {
      instance.removeAllEndpoints(ElMap.diagramContainerEl.current!);
    };
  }, []);

  return jsPlumbInstance;
};
