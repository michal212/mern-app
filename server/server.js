const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const studentRouter = require("./Routes/StudentRoute");

const app = express();
const path = require("path");
app.use(cors());


app.listen(process.env.PORT || 8080, (req, res) => {
  console.log("port running on port 8080 ");
});
app.use("/api/student", studentRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/bulid")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/bulid",'index.html'));
  });
}
