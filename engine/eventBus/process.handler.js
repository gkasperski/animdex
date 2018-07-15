
// Usage:
// processHandler.methods.createProcess('npm', ['run', 'dev'], 'test pipe');
const { spawn } = require('child_process');

function handleProcessEvents(child, pipe) {
  child.on('exit', (code, signal) => {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });
  
  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });
}

const processHandler = {
  'methods': {
    'createProcess': (cmd, cmdArgs, pipe) => {
      const child = spawn(cmd, cmdArgs)

      handleProcessEvents(child)
    }
  }
}

module.exports = processHandler;