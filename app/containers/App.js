// @flow
import * as React from 'react'
import { Header } from '../components/Header/Header';

// this should go to the redux layer, here just to check it out
import {ipcRenderer} from 'electron'

type Props = {
  children: React.Node
};

ipcRenderer.on('diskEvents/READ_DIR/RESPONSE', (event, message) => {
  console.log('READ_DIR/RESPONSE', message)
})

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
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main className="content">
        <button onClick={() => this.handleTestButton()}>CLICK</button>
        {this.props.children}
      </main>
    </div>
  )
  }
}
