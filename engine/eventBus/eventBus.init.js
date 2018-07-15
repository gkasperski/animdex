const util = require('util')
const events = require('events')
const busEvents = require('./eventBus.config')

let Emitter = function(name, events) {
  this.name = name
  this.events = events
}
util.inherits(Emitter,events.EventEmitter)

let eventBusInterface = {}

function makePools(busEvents) {
  return Object.values(busEvents).map( (pool, index) => {
    return new Emitter(
      Object.keys(busEvents)[index],
      pool
    )
  })
}

function initPool(pool) {
  const eventNames = Object.keys(pool.events)
  eventNames.forEach( (name, index) => {
    pool.on(name, (...args) => {
      const eventMethod = Object.values(pool.events)[index]
      eventMethod(...args)
    });
  } )
}

function generateInterfaceEvents(pools) {
  const output = {}
  pools.forEach((pool, index) => {
    output[pool.name] = pool
  })
  return output
}

function init() {
  const pools = makePools(busEvents)
  eventBusInterface.events = generateInterfaceEvents(pools)
  pools.forEach((pool, index) => {
    initPool(pool)
  })
}

// How to call the events
// interface.events.diskEvents.emit('READ_DIR','C:/')
// interface.events.diskEvents.emit('READ_FILE','C:/file')
module.exports.init = init
module.exports.interface = eventBusInterface