let moment = require('moment')
const getTime = async (format) => {
    return await moment().format(format)
}

module.exports = {
    getTime
}