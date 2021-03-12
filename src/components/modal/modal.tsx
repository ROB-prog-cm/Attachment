import React from 'react';
import styles from './styles.module.scss';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ osOpen: true })}>Open</button>
        {this.state.isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalBody}>
              <h1>Modal</h1>
              <p>open</p>
              <button onClick={() => this.setState({ osOpen: false })}>
                Close
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
