const { login } = require('../module/login/index')
module.exports = [{
    url: '/login',
    methods: 'post',
    actions: login
}]