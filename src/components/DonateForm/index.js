import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './donateForm.module.css';

class DonateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.handleDonateClick = this.handleDonateClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDonateClick() {
    // Donate button opens form since it will then submit form.
    this.setState({ isHidden: false });
  }

  handleCloseClick() {
    this.setState({ isHidden: true });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <form
          id="donate"
          className={this.state.isHidden ? `${styles.form} ${styles.hide}` : `${styles.form} ${styles.reveal}`}
          onSubmit={this.handleSubmit}
        >
          <button
            aria-label="Close the donate form."
            className={styles.close}
            onClick={this.handleCloseClick}
          >close
          </button>
          <input className={styles.input} placeholder="cc mask" type="text" />
          <input className={styles.input} placeholder="cvv mask" type="text" />
          <input className={styles.input} placeholder="zip mask" type="text" />
        </form>
        <button
          form={this.state.isHidden ? null : 'donate'}
          className={styles.button}
          onClick={this.handleDonateClick}
        >
          <span className={this.state.isHidden ? styles.donate : styles.payment}>{this.state.isHidden ? 'Donate' : 'Make Payment'}</span>
        </button>
      </div>
    );
  }
}

export default DonateForm;
