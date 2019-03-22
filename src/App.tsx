import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { Connect } from "src/pages/Connect";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Connect">Connect</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path={"/"} render={() => <div>home</div>} />
        <Route exact path="/Connect" component={Connect} />
      </Switch>
    </HashRouter>
  );
};
