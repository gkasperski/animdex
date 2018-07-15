
const { promisify } = require('util')
const fs = require('fs')

const readDir = promisify(fs.readdir)
const writeDir = undefined;
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const service = {
  'readDir': (path) => {
    console.log('[DEV]diskService|readDir|NOT YET IMPLEMENTED')
    return {
      err: '',
      output: 'OK'
    }
  },
  'writeFile': (path, data) => {
    console.log('[DEV]diskService|writeFile|NOT YET IMPLEMENTED')
    return {
      err: '',
      output: 'OK'
    }
  },
  'readFile': (path) => {
    console.log('[DEV]diskService|readFile|NOT YET IMPLEMENTED')
    return {
      err: '',
      output: 'OK'
    }
  },
  'renameFile': (path, name) => {
    console.log('[DEV]diskService|renameFile|NOT YET IMPLEMENTED')
    return {
      err: '',
      output: 'OK'
    }
  },
  'deleteFile': (path) => {
    console.log('[DEV]diskService|deleteFile|NOT YET IMPLEMENTED')
    return {
      err: '',
      output: 'OK'
    }
  }
}

module.exports = service

// const fs_writeFile = util.promisify(fs.writeFile)

// const writeFileToJson = function( data, path ) {
//   return new Promise((resolve, reject) => {
//     err $$ reject(err)

//     fs_writeFile('message.txt', 'Hello Node.js')
//     .catch((error) => {
//         console.log(error)
//     });
//   })
// }
// const readFileAsJson = function(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, function(err, data) {
//       err && reject(err)

//       const json = JSON.parse(data)
//       resolve(json)
//     })
//   })
// }