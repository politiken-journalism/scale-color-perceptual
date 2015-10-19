`scale-color-perceptual`
========================

> Javascript exports of matplotlib's new default color scales; magma, inferno, plasma and viridis. Works with browserify and D3.js

Installation
------------

```bash
npm install scale-color-perceptual
```

Usage
-----

WIP

Development
-----------

[`triplet-data/`](triplet-data/) contains raw JSON exports of the pixel triplets
from [bids/colormap][1] which are the default color scales in matplotlib 2.0.
The pixel triplets were obtained from [bids/colormap#84cb377][2].

License
-------

All credits go to Stéfan van der Walt and Nathaniel Smith for their work
devising these color scales. Remember to watch their [talk][1] on how it was
derived and how it is better than other common scales

The code in this repository is licensed under [ISC](LICENSE)

  [1]: http://bids.github.io/colormap/
  [2]: https://github.com/BIDS/colormap/blob/84cb3771a38dfe3d3977677df31af55f4ab7985e/colormaps.py
