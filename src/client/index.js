// src/client/index.js
import React from "react";
import { hydrate } from "react-dom";
import { App } from "../components/App";

hydrate(<App />, document.getElementById("react-root"));
