'use strict'

const rgb2hex = require('./utils/rgb2hex')

const hexScale = require(process.argv[2]).map(tuple => ({
  r: tuple[0],
  g: tuple[1],
  b: tuple[2]
}))
.map(rgb2hex)

process.stdout.write(JSON.stringify(hexScale))
