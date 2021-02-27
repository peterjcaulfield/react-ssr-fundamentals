// src/server/index.js
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { App } from "../components/App";

const app = express();

app.get("*", (_, res) => {
  const app = renderToString(<App />);
  res.send(app);
});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});
