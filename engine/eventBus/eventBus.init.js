// WE CREATE OR KILL PROCESSES HERE
// EventBus should mostly be constructed as set of reactions for the events
// Process handler is used only to initialize every services needed, based on initially defined sets of events
// As the evens are descrived in processes itself, eventBus main role is to initialize those processes.
// DISK EVENTS:


// processHandler.methods.createProcess('npm', ['run', 'dev'], 'test pipe');

const util = require('util')
const events = require('events')
const diskEvents = require('./../diskService/disk.events')

let Emitter = function(name, events) {
  this.name = name
  this.events = events
}

util.inherits(Emitter,events.EventEmitter)

// automate those two
const diskPool = new Emitter('diskEvents',diskEvents)
const pools = [diskPool]

function initPool(pool) {
  const eventNames = Object.keys(pool.events)
  eventNames.forEach( (name, index) => {
    pool.on(name, () => {
      const eventMethod = Object.values(pool.events)[index]
      eventMethod()
    });
  } )
}

function init() {
  pools.forEach((pool, index) => {
    initPool(pool)
  })
}

init()

diskPool.emit('READ_DIR','This is james');

module.exports = init

// 
// const eventPools = {
//   events: [
//     diskEvents
//   ],
//   'diskEmitter': events.EventEmitter
// }

// console.log('eventPools', eventPools)

// function initializePoolEvents(names, poolEvents) {
//   names.forEach( (name, index) => {
//     console.log(name, index)
//     eventPools.diskEmitter.on(name, () => {
//       poolEvents[index]()
//     });
//   } )
// }

// function init () {
//   eventPools.events.forEach((pool) => {
//     const eventNames = Object.keys(pool)
//     initializePoolEvents(eventNames, pool)
//   } )
// }

// eventPools.events.for

// eventPools.forEach((pool) => {
//   const eventNames = Object.keys(pool);
//   console.log(eventNames)
//   // pool.on('')
// // })