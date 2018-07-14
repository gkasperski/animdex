const diskService = require('./disk.service')

const events = {
  'READ_DIR': async (path) => {
    try {
      const { err, output } = await diskService.readDir(path)
      return { err, output }
    } catch(e) {
      console.log('[ERROR]|fileEvents|readDir| ',e)
    }
  },
  'READ_FILE': async (path) => {
    try {
      const { err, output } = await diskService.readFile(path)
      return { err, output }
    } catch(e) {
      console.log('[ERROR]|fileEvents|READ_FILE|',e)
    } 
  },
  'WRITE_FILE':  async (path, data) => {
    try {
      const { err, output } = await diskService.writeFile(path, data)
      return { err, output }
    } catch(e) {
      console.log('[ERROR]|fileEvents|WRITE_FILE|',e)
    }
  },
  'RENAME_FILE': async (path, name) => {
    try {
      const { err, output } = await diskService.renameFile(path, name)
      return { err, output }
    } catch(e) {
      console.log('[ERROR]|fileService|writeFile| ',e)
    }
  },
  'DELETE_FILE': async (path) => {
    try {
      const { err, output } = await diskService.deleteFile(path)
      return { err, output }
    } catch(e) {
      console.log('[ERROR]|fileEvents|READ_FILE|',e)
    } 
  }
}

module.exports = events