/**
 * 锚点位置
 */
export enum position {
  "Assign" = "Assign",
  "AutoDefault" = "AutoDefault",
  "Bottom" = "Bottom",
  "BottomCenter" = "BottomCenter",
  "BottomLeft" = "BottomLeft",
  "BottomRight" = "BottomRight",
  "Center" = "Center",
  "Continuous" = "Continuous",
  "ContinuousBottom" = "ContinuousBottom",
  "ContinuousLeft" = "ContinuousLeft",
  "ContinuousRight" = "ContinuousRight",
  "ContinuousTop" = "ContinuousTop",
  "Left" = "Left",
  "LeftMiddle" = "LeftMiddle",
  "Perimeter" = "Perimeter",
  "Right" = "Right",
  "RightMiddle" = "RightMiddle",
  "Top" = "Top",
  "TopCenter" = "TopCenter",
  "TopLeft" = "TopLeft",
  "TopRight" = "TopRight"
}

/**
 * 连接线类型
 */
export enum connector {
  /**
   * Bezier（贝塞尔曲线）：贝塞尔曲线提供了两个端点之间的立方体路径，它支持一个构造函数参数
   */
  Bezier = "Bezier",
  /**
   * Straight（直线）：直连绘制直线的两个端点之间，没有构造函数的参数支持，使用参数endpointStyle定义连接样式或添加端点时定义连接线样式
   */
  Straight = "Straight",
  /**
   * Flowchart（流程图）：这种类型的连接器，绘制一系列垂直或水平段组成的连接-经典的流程图，支持一个单一的构造函数参数
   */
  Flowchart = "Flowchart",
  /**
   * State Machine（状态机）：这是最小长度，以像素为单位，从端点发出的初始存根。词参数是可选的，默认为30像素
   */
  StateMachine = "State Machine"
}

/**
 * 一个端点的UI组件，标志着一个锚的位置，是连接器连接的点
 */
export enum endpoint {
  /**
   * Dot（点端点）：此端点在屏幕上画一个点 半径--可选，默认10像素
   */
  Dot = "Dot",
  /**
   * Rectangle（矩形端点）：绘制一个矩形，宽度- 可选，默认20像素，高度-可选，默认20像素
   */
  Rectangle = "Rectangle",
  /**
   * Image（图片端点）：从一个给定的URL绘制图像 SRC-必须
   */
  Image = "Image"
}

/**
 * Overlay：覆盖界面上的链接元素，如标签或箭头，
 * 显示/隐藏覆盖：setVisible来控制Arrow的显示或隐藏，或者showOverlay(ID),或者hideOverlay(ID)
 */
export enum overlay {
  /**
   *   Arrow：客配置的箭头，放在两个点的连接线上，你可以控制箭头的长度和宽度，转折点：是一个折回点，方向点（允许是1和-1，意味着是点的链接方向）
   */
  Arrow = "Arrow",
  /**
   * Label：在点的连接器上的可配置的标签
   */
  Label = "Label",
  /**
   * plainArrow:一个三角形箭头，没有这会点
   */
  plainArrow = "plainArrow",
  /**
   *   diamond:钻石
   */
  diamond = "diamond"
}
