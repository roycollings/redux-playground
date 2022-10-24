import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <Results />
    </div>
  );
}

export default App;
