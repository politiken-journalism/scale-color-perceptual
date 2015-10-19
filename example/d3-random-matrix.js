const d3 = require('d3')
const viridis = require('../plasma')

const depthScale = d3.scale.linear().domain([-100, 100]) // default range is [0, 1]
    .clamp(true) // Make sure the output is constrained to [0, 1]

d3.selectAll('div', document.body)
    .data(d3.shuffle(d3.range(-100, 100, 0.1)).map(n => Math.random() * n))
  .enter().append('div')
    .style({
      background: d => viridis(depthScale(d)),
      width: '10px',
      height: '10px',
      float: 'left'
    })
