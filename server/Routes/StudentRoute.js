const app =require('app')
const Router = app.Router()


Router.get("/",(req,res)=>{
res.send('im runing on studnet route')
})

module.exports=Router;