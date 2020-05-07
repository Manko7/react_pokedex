import React, { Component } from 'react';
import Pokemon from './components/pokemons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <form className="py-5 col-12">
              <input placeholder="Search ..." className="w-100" />
            </form>
          </div>
          <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
