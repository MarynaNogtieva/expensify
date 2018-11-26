import React from 'react';

const EditPage = (props) => {
  console.log(props);
  return(
    <div>
    this is from my EditPage component of {props.match.params.id}
   </div>
  )
};

export default EditPage;