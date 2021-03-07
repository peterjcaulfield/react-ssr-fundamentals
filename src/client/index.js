import React from "react";
import { loadableReady } from "@loadable/component";
import { hydrate } from "react-dom";
import { App } from "../components/App";
import { BrowserRouter } from "react-router-dom";

const initialState = window.__INITIAL_STATE__;

loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <App initialState={initialState} />
    </BrowserRouter>,
    document.getElementById("react-root")
  );
});
