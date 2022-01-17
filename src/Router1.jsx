import React from "react";
import { Route, Switch } from "react-router-dom";
import { Detail } from "./Detail";
import { Detail1 } from "./Detail1";
import { DetailA } from "./DetailA";
import { DetailB } from "./DetailB";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Top } from "./Top";

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
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detail`}>
              <Detail />
            </Route>
            <Route path={`${url}/detail1`}>
              <Detail1 />
            </Route>
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page2 />
            </Route>
            <Route path={`${url}/detailA`}>
              <DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <DetailB />
            </Route>
          </Switch>
        )}
      />
    </Switch>
  );
};
