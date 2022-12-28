const home = require('./home')
const login = require('./login')
const API = [
    ...home,
    ...login
]

module.exports = API