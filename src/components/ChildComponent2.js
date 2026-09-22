import React from 'react';

const ChildComponent2 = ({ onSelect }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <button onClick={() => onSelect('Option 2')}>
        Choose Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
