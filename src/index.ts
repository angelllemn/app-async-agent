import express from "express";
const app = express();

app.get("/healthz", (_req, res) => res.send("ok"));
app.get("/", (_req, res) => res.send("Hello from async agent template!"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on :${port}`));
