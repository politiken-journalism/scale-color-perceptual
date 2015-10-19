'use strict'

var hex2rgb = require('./hex2rgb')
var rgb2hex = require('./rgb2hex')

function interpolate (a, b) {
  a = hex2rgb(a)
  b = hex2rgb(b)

  var ar = a.r
  var ag = a.g
  var ab = a.b
  var br = b.r - ar
  var bg = b.g - ag
  var bb = b.b - ab

  return function (t) {
    return rgb2hex({
      r: ar + br * t,
      g: ag + bg * t,
      b: ab + bb * t
    })
  }
}

function interpolateArray (scaleArr) {
  var N = scaleArr.length - 2 // -1 for spacings, -1 for number of interpolate fns
  var intervalWidth = 1 / N
  var intervals = []

  for (var i = 0; i <= N; i++) {
    intervals[i] = interpolate(scaleArr[i], scaleArr[i + 1])
  }

  return function (t) {
    if (t < 0 || t > 1) throw new Error('Outside the allowed range of [0, 1]')

    var i = Math.floor(t * N)
    var intervalOffset = i * intervalWidth

    return intervals[i](t / intervalWidth - intervalOffset / intervalWidth)
  }
}

module.exports = {
  interpolate: interpolate,
  interpolateArray: interpolateArray
}
