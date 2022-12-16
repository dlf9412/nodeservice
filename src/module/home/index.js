const  {query,pool} =require('../../mysql/index')

// 第一种异步实现方式
const selectAppList=(ctx,next)=>{
  console.log(ctx.query.username)
  return new Promise((res,rej)=>{
    const selectTodo='select * from user'
    pool.query(selectTodo,(error,results,fields)=>{
      ctx.body=results
      res(next())
    })
  })
}

// 异步请求的第二种方式，使用封装的query方法
const selectSingleApp=async (ctx,next)=>{
  const {username}=ctx.query
  const selectTodo=`select * from user where username="${username}"`
  const data=await query(selectTodo);
  ctx.body=data
}

module.exports={
  selectAppList,
  selectSingleApp
}