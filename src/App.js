import React from 'react';
import './App.css';
import EmployeeContainer from './components/EmployeeContainer/EmployeeContainer.component'

function App() {
  return (
    // note the app class has a bunch of styling on it, tweak later
    <div className="App">
      <EmployeeContainer />
    </div>
  );
}

export default App;
