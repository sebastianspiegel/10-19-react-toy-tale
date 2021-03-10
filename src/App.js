import logo from './logo.svg';
import './App.css';
import ToysContainer from './ToysContainer'
import React from 'react'

class App extends React.Component {

  state = {
    search: ""
  }

  handleInputChange = (e) => {
    const search = e.target.value
    this.setState({search: search}) // will cause a rerender
  }

  render() {
    return (
      <div className="App">
        <h1>React Toy Tale</h1>
        <div>
          <input type="text" placeholder="Search for a toy..." onChange={this.handleInputChange}/>
        </div>
        <ToysContainer searchTerm={this.state.search} />
      </div>
    );
  }
}


export default App;
