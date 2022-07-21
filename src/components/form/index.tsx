import React from 'react';

function Form({ props } : any) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export default Form;