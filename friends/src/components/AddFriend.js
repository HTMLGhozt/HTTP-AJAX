import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
  render() {
    let name, age, email;
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.addFriend({name: name.value, age: age.value, email: email.value});
        name.value = age.value = email.value = '';
      }}>
        <input ref={node => name = node } placeholder='name here...'></input>
        <input ref={node => age = node } placeholder='age here...'></input>
        <input ref={node => email = node } placeholder='email here...'></input>
        <button type='submit'>submit</button>
      </form>
    );
  }
};

export default connect(null, { addFriend })(AddFriend);