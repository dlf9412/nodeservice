const Koa=require('koa')
// const Router=require('koa-router')
const bodyParser=require('koa-bodyparser')
const router=require('./module/index')
// const {proxy}=require('./module/config')
const connection=require('./mysql/index')

// 初始化
const app=new Koa()

// 设置跨域
// app.use(proxy)

// 连接数据库
// console.log(connection)

// 解析request 的body
app.use(bodyParser())

app.use(router.routes())
// 启动服务，在端口6060监听
app.listen(6060,()=>{
  console.log('6060，服务启动了')
})
