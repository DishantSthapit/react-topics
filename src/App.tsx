import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseContext from './components/useContextExample/useContext';
import UseState from './components/useStateExample/useState';
import ScrollTop from './components/scrollTop/scrollTop';

function App() {
  return (
    <div className="App">
      <div>Import Components here</div>
      <UseContext/>
      <UseState />
      <ScrollTop/>
    </div>
  );
}

export default App;
