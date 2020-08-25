import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Anik</h1>
        
      </header>
    </div>
  );
}
function Hero(){
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h1>Programing Hero</h1>
    </div>
  )

}
export default App;
