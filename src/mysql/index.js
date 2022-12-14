// 导入mysql模块
const mysql = require('mysql')

// 添加设置
const options = {
    host: 'localhost', // 数据库的ip地址
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'paassql'// 指定操作的数据库
}
// 创建数据库连接池
const pool = mysql.createPool(options)
// 创建connection,测试语句，确定建立连接以后可以删除
// pool.getConnection(function(err){
//   if(err){
//     console.log('连接失败')
//     return 
//   }
//   console.log('连接成功')
// })

// 关闭连接
// connection.end(function (err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });

// promise封装query 
const query = (sql, params = []) => {
    if (!pool) return;
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results, fields) => {
            if (error){
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}


module.exports = {
    query,
    pool
}

