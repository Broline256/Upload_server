const express = require("express");

const app = express();

app.use(express.raw({ type: "/", limit: "1gb" }));

app.post("/", (req, res) => {
  console.log(Received ${req.body.length} bytes);
  res.send("Upload received");
});

app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started"));
