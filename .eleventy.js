const _ = require('lodash')

module.exports = function(config) {
  config.dir = {
    input: 'src',
    output: '_site'
  }

  // Passthrough Copy
  config.addPassthroughCopy('src/assets/img')
  config.addPassthroughCopy('src/assets/dist')

  // Collections
  function getOfferings(collection, tag) {
    return _.sortBy(collection.getFilteredByTag(tag), 'fileSlug')
  }
  // Offerings
  config.addCollection('offerings_branding', c => getOfferings(c, 'branding'))
  config.addCollection('offerings_marketing', c => getOfferings(c, 'marketing'))
  config.addCollection('offerings_web', c => getOfferings(c, 'web'))

  return config
}
