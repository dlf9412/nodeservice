const Koa=require('koa')
// const Router=require('koa-router')
const bodyParser=require('koa-bodyparser')
const router=require('./module/index')

// const {pool}=require('./mysql/index')
// const {proxy}=require('./module/config')

// 初始化
const app=new Koa()

// 设置跨域
// app.use(proxy)
// const route1=new Router()
// route1.get('/getSelect',(ctx,next)=>{
//   console.log(1111)
//   return new Promise((reslove,reject)=>{
//     pool.query('select * from user',(error,result,fields)=>{
//       console.log(result)
//       ctx.body=result
//       reslove(next())
//     })
//   })
  
// })

// 解析request 的body
app.use(bodyParser())
// app.use(route1.routes())/

app.use(router.routes())
// 启动服务，在端口6060监听
app.listen(6060,()=>{
  console.log('6060，服务启动了')
})
