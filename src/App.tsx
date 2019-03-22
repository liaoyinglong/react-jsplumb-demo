import React from "react";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { Simple } from "src/pages/Simple";
import { Draggable } from "src/pages/Draggable";
import { LineStyle } from "src/pages/LineStyle";

const NavArr = [
  {
    to: "/connect/simple",
    name: "简单连线版本",
    component: Simple
  },
  {
    to: "/connect/draggable",
    name: "可拖拽的版本",
    component: Draggable
  },
  {
    to: "/connect/LineStyle",
    name: "连接线样式自定义",
    component: LineStyle
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
