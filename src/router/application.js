
const { appListSelect, insertAppType } = require('../module/application/index')
module.exports = [{
    url: '/application/select', // 查询应用列表
    methods: 'get',
    actions: appListSelect
}, {
    url: '/application/insertAppType',
    methods: 'post',
    actions: insertAppType
}]