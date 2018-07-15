import { app, ipcMain } from 'electron'

const ipcEvents = []

function generateIpcEvents(emitter, events) {
  Object.keys(events).forEach(( eventName, index ) => {
    const ipcEventName = `${emitter.name}/${eventName}`
    ipcEvents.push(ipcEventName)
    ipcMain.on(ipcEventName, (event, ...args) => {
      emitter.emit(eventName, ...args)
    })
  })
}

function ipcLayerInit(emitters) {
  Object.keys(emitters).forEach((emitterName, index) => {
    const emitter = emitters[emitterName]
    const events = emitter.events

    generateIpcEvents(emitter, events)
  })
}

module.exports.init = ipcLayerInit
module.exports.eventsList = ipcEvents