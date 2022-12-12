const Router=require('koa-router')
const home=require('./home/api')
let API=[]
API=[...home]
/*
* prefix 路由前缀
*/
const router=new Router({
  prefix:'/api'
})

API.forEach(api=>{
  router[api.methods](api.url,api.actions)
})

module.exports=router