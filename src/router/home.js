const { selectAppList, selectSingleApp } = require('../module/home/index')
module.exports = [{
    url: '/select',
    methods: 'get',
    actions: selectAppList
}, {
    url: '/select/singleApp',
    methods: 'get',
    actions: selectSingleApp
}]