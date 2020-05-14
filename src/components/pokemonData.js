import React, { Component } from 'react'
import axios from 'axios';

class PokeData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokeData: [],
            sprites: [],
            stats: [],
            types: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.poke_id;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => {
            console.log(res.data);
            this.setState({pokeData: res.data});
            this.setState({sprites: res.data.sprites});
            this.setState({stats: res.data.stats});
            this.setState({types: res.data.types});
            this.state.stats.map((stat) => {
                console.log(stat.stat.name);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const pokeData = this.state.pokeData;
        const sprites = this.state.sprites;
        const stats = this.state.stats;
        const pokeType = this.state.types;

        return (
            <div>
                <div className="row">
                    <div className="col text-center">
                        <h1>
                            {pokeData.name}
                        </h1>
                        <br />
                        <img src={sprites.front_default} alt="peep" className="img-fluid w-100" />
                        <p>
                            {pokeType.map((type, index) => {
                                return (
                                    <span key={index}> {type.type.name} </span>
                                )})
                            }
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li>
                                Speed
                            </li>
                            <li>
                                Special-defense
                            </li> 
                            <li>
                                Special-attack
                            </li>
                            <li>
                                Defense
                            </li>
                            <li>
                                Attack
                            </li>
                            <li>
                                Hp
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="25" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li> 
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="25" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="25" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="25" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="25" aria-valuemax="100"></div>
                                </div>
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeData