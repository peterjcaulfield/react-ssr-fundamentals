// src/server/index.js
import React from "react";
import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { App } from "../components/App";
import { ChunkExtractor } from "@loadable/server";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// tell express to serve all requests for "static" files from the public directory
app.use(express.static("public"));

const statsFile = path.resolve("public/loadable-stats.json");

app.get("*", (req, res) => {
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: ["app"],
  });

  const jsx = extractor.collectChunks(
    <StaticRouter location={req.path}>
      <App />
    </StaticRouter>
  );

  const app = renderToString(jsx);

  const scripts = extractor.getScriptTags();

  res.render("index", { app, scripts });
});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});
