'use strict'

function zeroPadHex (hexStr) {
  return '00'.slice(hexStr.length) + hexStr
}

module.exports = function rgb2hex (rgb) {
  // Map channel triplet into hex color code
  return '#' + [rgb.r, rgb.g, rgb.b]
    // Convert to hex (map [0, 1] => [0, 255] => Z => [0x0, 0xff])
    .map(function (ch) { return Math.round(ch * 255).toString(16) })
    // Make sure each channel is two digits long
    .map(zeroPadHex)
    .join('')
}
