const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Nishi's DevOps Mini Project!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
