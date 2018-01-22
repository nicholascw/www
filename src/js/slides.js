const clientID = '948918026196-p399ooibc7pr0ci7ida63jb5a6n4vsik.apps.googleusercontent.com'

const bespoke = require('./slides/bespoke.js')
const classes = require('bespoke-classes')
const nav = require('bespoke-nav')
const scale = require('./slides/bespoke-scale.js')
const bullets = require('bespoke-bullets')
const hash = require('bespoke-hash')
const multimedia = require('bespoke-multimedia')
const extern = require('bespoke-extern')
const fullscreen = require('bespoke-fullscreen')
const overview = require('bespoke-overview')
const forms = require('bespoke-forms')
const janini = require('./slides/janini.js')

bespoke.from({
  parent: 'article.deck',
  slides: 'div.sect1',
  clientID: clientID
}, [
  classes(),
  nav(),
  scale(),
  bullets('.bullet'),
  hash(),
  multimedia(),
  extern(bespoke),
  fullscreen(),
  overview(),
  forms(),
  janini()
])

