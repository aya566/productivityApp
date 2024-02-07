import React from 'react';
// dah el account
function DisplayComponent( props) {
  const form = props.form;
  console.log(props.form)
  return (
    <div>
      <p>wrsxedtcfhvgjbhnbhgvyftdersw{form.name}</p>
      
    </div>
  );
}

export default DisplayComponent;

