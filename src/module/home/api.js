const {selectAppList}=require('./select')
module.exports=[{
  url:'/select',
  methods:'get',
  actions:selectAppList
}]