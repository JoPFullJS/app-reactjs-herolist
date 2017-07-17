import React from 'react';
import Heros from './Heros.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header"><h1>React JS : List Heros du Developpement Web (Sans Redux et router)</h1></header>
        <section>
          <Heros ></Heros>
        </section>
      </div>
    );
  }
} 

export default App;