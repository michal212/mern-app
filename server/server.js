const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello from srerver");
});

app.listen(8080, (req, res) => {
  console.log("port running on port 8080 ");
});
