import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
    state = {
        pokemon: [],
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((res) => {
            console.log("Collecting Pokemon");
            this.setState({pokemon: res.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const pokemon = this.state.pokemon.results;

        return (
            <div className="row">
                {pokemon ? pokemon.map(
                    (p, id) => {
                        return (
                            <div key={id} className="col-4">
                                <a href={"/pokemon/" + (id + 1)}>
                                    <div className="pokeCard mt-1">
                                        <div className="row mx-3 pt-2">
                                            <h5>
                                                #{id.toString().length >= 3 ? (id + 1) : id.toString().length >= 2 ? "0" + (id + 1) : "00" + (id + 1) }
                                            </h5>
                                        </div>
                                        <div className="row pokeImg mx-3">
                                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (id + 1) + ".png"} alt="Pokemon" className="img-fluid mx-auto" />
                                        </div>
                                        <div className="row mx-3 pt-2">
                                            <p className="mx-auto">
                                                {p.name}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                        
                    )
                :
                    <div className="mx-auto">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p>
                            Loading ...
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default Pokemon