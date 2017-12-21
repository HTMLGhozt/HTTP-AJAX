import React from 'react';

const Form = (props) => {
  let name, age, email;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.inputFunction(props.id, {name: name.value, age: age.value, email: email.value});
      name.value = age.value = email.value = '';
    }} style={{ visibility: props.update ? 'visible' : 'hidden' }}>
      <input ref={node => name = node } placeholder='name here...'></input>
      <input ref={node => age = node } placeholder='age here...'></input>
      <input ref={node => email = node } placeholder='email here...'></input>
      <button type='submit'>submit</button>
    </form>
  );
}

export default Form;