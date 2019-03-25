declare global {
  declare module "jsPlumb" {
    import { PaintStyle } from "jsplumb";

    interface ConnectParams {
      /**
       * 连接线配置
       */
      paintStyle?: PaintStyle;
      /**
       * 端点的配置
       */
      endpointStyle?: {
        fill: string;
        outlineStroke: string;
        outlineWidth: number;
      };
    }

    /**
     * 端点的配置
     */
    interface EndpointOptions {
      anchors?: string[];
      connector?: string[];
      maxConnections?: number; //= 1?
      parameters?: object;
      id?: string;
      scope?: string;
      reattachConnections?: boolean;
      type?: string; // "Dot", etc.
    }

    interface AnchorOptions {
      [key: string]: any;
    }
  }
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}
