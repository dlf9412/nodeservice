const home = require('./home')
const login = require('./login')
const application = require('./application')
const API = [
    ...home,
    ...login,
    ...application
]

module.exports = API