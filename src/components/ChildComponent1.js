import React from 'react';

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <button onClick={() => onSelect('Option 1')}>
        Choose Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
