const express = require("express");
const app = express();
const cors = require("cors");
const path =require('path')
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("hello from srerver");
// });

app.listen(8080, (req, res) => {
  console.log("port running on port 8080 ");
});

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../client/bulid')));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../client/bulid,'index.html"))
    })
}