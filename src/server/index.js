// src/server/index.js
import React from "react";
import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "../components/App";
import { ChunkExtractor } from "@loadable/server";
import { routes } from "../routes";
import { matchPath } from "react-router";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// tell express to serve all requests for "static" files from the public directory
app.use(express.static("public"));

const statsFile = path.resolve("public/loadable-stats.json");

const getPageData = async (path) => {
  const match = routes.find((route) => {
    return matchPath(path, route);
  });

  if (match && match.getPageData) {
    const initialState = await match.getPageData();
    return initialState;
  }
  return null;
};

app.get("*", async (req, res) => {
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: ["app"],
  });

  const initialState = await getPageData(req.path);

  const jsx = extractor.collectChunks(
    <StaticRouter location={req.path}>
      <App initialState={initialState} />
    </StaticRouter>
  );

  const app = renderToString(jsx);

  const scripts = extractor.getScriptTags();

  res.render("index", { app, initialState, scripts });
});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});
