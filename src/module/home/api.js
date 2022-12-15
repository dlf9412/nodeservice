const {selectAppList,selectSingleApp}=require('./select')
module.exports=[{
  url:'/select',
  methods:'get',
  actions:selectAppList
},{
  url:'/select/singleApp',
  methods:'get',
  actions:selectSingleApp
}]