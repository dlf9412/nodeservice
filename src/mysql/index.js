// 导入mysql模块
const mysql=require('mysql')

//添加设置
const options={
  host:'localhost',//数据库的ip地址
  port:3306,
  user:'root',
  password:'123456',
  database:'mysql',//指定操作的数据库
}
// 创建数据库连接池
 const connection=mysql.createConnection(options)
// 创建connection
connection.connect(function(err){
  if(err){
    console.log('连接失败')
    return 
  }
  console.log('连接成功')
})
module.exports=connection

