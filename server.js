const express = require("express");

const app = express();

// STREAM upload (safe for large files)
app.post("/", (req, res) => {
  let size = 0;

  req.on("data", chunk => {
    size += chunk.length;
  });

  req.on("end", () => {
    console.log(`Received ${size} bytes at ${new Date()}`);
    res.send("OK");
  });
});

app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
