import * as React from 'react';
import PropTypes from 'prop-types';
import { ipcRenderer } from 'electron';
import Header from '../../components/Header/Header';
import styles from './App.scss';

ipcRenderer.on('diskEvents/READ_DIR/RESPONSE', (event, message) => {
  console.log('READ_DIR/RESPONSE', message);
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentWillMount() {
    ipcRenderer.on('eventsList', (event, message) => {
      console.log('event', event);
      console.log('message', message);
      this.setState({ events: message });
    });
  }

  handleTestButton() {
    console.log('click');
    ipcRenderer.send(
      this.state.events[0],
      'testing event calling from frontend'
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <button onClick={() => this.handleTestButton()}>CLICK</button>
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
