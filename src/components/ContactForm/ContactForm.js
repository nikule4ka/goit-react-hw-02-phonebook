import React, { Component } from 'react';

import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  hanldeChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            id={this.nameInputId}
            name="name"
            value={name}
            onChange={this.hanldeChange}
            placeholder="Name..."
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="phone"
            id={this.numberInputId}
            name="number"
            value={number}
            onChange={this.hanldeChange}
            placeholder="Phone..."
          />
        </label>
        <button type="submit" className={s.btnForm}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
