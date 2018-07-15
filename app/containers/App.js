// @flow
import * as React from 'react'

// this should go to the redux layer, here just to check it out
import {ipcRenderer} from 'electron'
let eventsList = []

type Props = {
  children: React.Node
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'events': []
    }
  }
  componentWillMount() {
    ipcRenderer.on('eventsList', (event, message) => {
      console.log('event',event)
      console.log('message',message)
      this.setState({'events': message})
    })
  }

  handleTestButton() {
    console.log('click')
    ipcRenderer.send(this.state.events[0], 'testing event calling from frontend')
  }

  render() {
  return (
    <div>
      <button onClick={() => this.handleTestButton()}>CLICK</button>
      {this.props.children}
    </div>
  )
  }
}
