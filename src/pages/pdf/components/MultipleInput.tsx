import React from 'react';

const MultipleInput = () => {
  function handleOnChange(e: any) {}
  return (
    <div>
      {[new Array(6)].map((_, idx: number) => (
        <input type='text' onChange={(e) => handleOnChange(e)} />
      ))}
    </div>
  );
};

export default MultipleInput;
