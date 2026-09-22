
import React from "react";
import './../styles/App.css';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="parent" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Parent Component</h2>
      <p>Current Selected Option: <strong>{selectedOption || 'None'}</strong></p>
      <ChildComponent1 onSelect={setSelectedOption} />
      <ChildComponent2 onSelect={setSelectedOption} />
    </div>
  );
};

export default App;
