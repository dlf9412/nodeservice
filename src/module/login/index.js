const { query, pool } = require('../../mysql/index')

const login = async (ctx, body) => {
    const { username, password } = ctx.request.body
    const todo = `select * from user where username=? and password=?`
    const data = await query(todo, [username, password])
    let message = '登录成功', code = 200
    if (!data.length){
        message = '用户名或密码错误';
        code = 10000
    }
    ctx.body = {
        message,
        code
    }
}

module.exports = {
    login
}