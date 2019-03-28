import React from "react";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { Draggable } from "src/pages/connect/Draggable";
import { DragToConnection } from "src/pages/connect/DragToConnection";
import { LineStyle } from "src/pages/connect/LineStyle";
import { Simple } from "src/pages/connect/Simple";
import { BaseEditor } from "src/pages/editor/BaseEditor";

const NavArr = [
  {
    to: "/connect/Simple",
    name: "简单连线版本",
    component: Simple
  },
  {
    to: "/connect/Draggable",
    name: "可拖拽的版本",
    component: Draggable
  },
  {
    to: "/connect/LineStyle",
    name: "连接线样式自定义",
    component: LineStyle
  },
  {
    to: "/connect/DragToConnection",
    name: "拖动创建连接",
    component: DragToConnection
  },
  {
    to: "/editor/BaseEditor",
    name: "基础编辑器",
    component: BaseEditor
  }
];
export const App = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            {NavArr.map(item => (
              <li key={item.to}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Switch>
        {NavArr.map(item => (
          <Route
            key={item.to}
            exact
            path={item.to}
            component={item.component}
          />
        ))}
        <Redirect to={NavArr[0].to} path={"*"} />
      </Switch>
    </HashRouter>
  );
};
