import { Component } from 'react';
import './App.css';
import ToysContainer from './ToysContainer'

class App extends Component{

 
  render(){
    return (
      <div className="App">
        <h1>React Toy Tale</h1>
        <ToysContainer />
      </div>
    );
  }
}

export default App;
