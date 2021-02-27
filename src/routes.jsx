// source/routes.jsx
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Switch } from "react-router";

// we'll need this export later
export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
];

const Routes = () => (
  <Switch>
    {routes.map(({ path, component, exact }) => (
      <Route exact={exact} path={path} key={path} component={component} />
    ))}
  </Switch>
);

export default Routes;
