import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "../NotFound";
import { Top } from "../Top";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router1 = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
