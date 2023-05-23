const message = require('./code')
const requestBody = (body, code, message) => {
    return {
        data: body,
        code: message[code],
        message
    }
}
module.exports = {
    requestBody
}