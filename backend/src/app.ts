import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ welcomeNode: "Hello World!" });
});

export default app;
