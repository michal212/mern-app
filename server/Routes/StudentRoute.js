const Router =require('express').Router()


Router.get("/",(req,res)=>{
res.send('im runing on studnet route')
})

module.exports=Router;