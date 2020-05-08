import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokemon from './components/pokemons';
import pokemonData from './components/pokemonData';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <form className="py-5 col-12">
                    <input placeholder="Search ..." className="w-100" />
                  </form>
                </div>
                <Pokemon />
              </div>
              <div className="col-6">
                <h3>
                  Soon Pokedetail here
                </h3>
                <Route path="/pokemon/:poke_id" component={pokemonData} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
