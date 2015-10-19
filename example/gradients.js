var c = window.document.createElement('canvas')
window.document.body.appendChild(c)
var ctx = c.getContext('2d')

var height = 390
var width = 728

c.height = height
c.width = width

var scale = require('..')

var barHeight = (height - 10 * 3) / 4

for (var pixel = 0; pixel < width; pixel++) {
  ctx.fillStyle = scale.inferno(pixel / width)
  ctx.fillRect(pixel, 0 * (barHeight + 10), 1, barHeight)

  ctx.fillStyle = scale.magma(pixel / width)
  ctx.fillRect(pixel, 1 * (barHeight + 10), 1, barHeight)

  ctx.fillStyle = scale.plasma(pixel / width)
  ctx.fillRect(pixel, 2 * (barHeight + 10), 1, barHeight)

  ctx.fillStyle = scale.viridis(pixel / width)
  ctx.fillRect(pixel, 3 * (barHeight + 10), 1, barHeight)
}
