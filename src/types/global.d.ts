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
  }
}
