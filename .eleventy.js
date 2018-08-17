const _ = require('lodash')

module.exports = function(config) {
    config.dir = {
        input: 'src',
        output: '_site'
    }

    // Passthrough Copy
    config.addPassthroughCopy('src/assets')

    return config
}
