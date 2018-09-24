import { ipcRenderer } from 'electron';

ipcRenderer.on('eventsList', (event, message) => {
  // Read message list
  // Set up actions
  console.log('event', event);
  console.log('message', message);
  this.setState({ events: message });
});

export default store => next => action => {
  if (action.type.startsWith('IPC/')) {
    // Handle ipc actions
  }
  next(action);
};
