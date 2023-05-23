const { query, pool } = require('../../mysql/index')
const { requestBody } = require('../../util/request')
// 查询应用列表
const appListSelect = async (ctx, body) => {
    const { appName } = ctx.request.body
    let todo = ''
    todo = `select * from application where appName=? `
    const data = await query(todo, [appName])
    ctx.body = requestBody(data, 200, '请求成功')
}

// 添加应用
const insertApp = async (ctx, body) => {
  
}

// 添加应用分类
const insertAppType = async (ctx, body) => {
    const { name } = ctx.request.body
    console.log(name)
}

module.exports = {
    appListSelect,
    insertAppType
}