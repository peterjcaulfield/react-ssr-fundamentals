// src/server/index.js
import express from "express";

const app = express();

app.get("*", (_, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});
