// App.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "../routes";
import { PageProvider } from "../components/PageContext";

export const App = ({ initialState }) => (
  <PageProvider initialState={initialState}>
    <div id="app">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  </PageProvider>
);
