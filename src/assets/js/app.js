import popper from 'popper.js'
import jQuery from 'jquery'

window.Popper = popper.default
window.$ = window.jQuery = jQuery

import 'bootstrap'

require('bigtext/src/bigtext.js')

$(document).ready(function () {
  $('.bigtext').bigtext()
})
