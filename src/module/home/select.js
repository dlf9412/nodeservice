const  connection =require('../../mysql/index')
const selectAppList=async (ctx,body)=>{
  let result=[]
  const selectTodo='SELECT * FROM user'
  await connection.query(selectTodo, function (error, results, fields) {
    if (error) throw error;
    result=results
  });
  console.log()
  ctx.body=result
  
}

module.exports={
  selectAppList
}