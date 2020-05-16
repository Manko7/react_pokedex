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
            this.state.stats.map((i) => {
                console.log(i);
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
        const progressBar = {
            width: this.state.stats.stat.base_stat + "%",
        }

        return (
            <div className="pokeDetail">
                <div className="row">
                    <div className="col text-center">
                        <h1>
                            {pokeData.name}
                        </h1>
                        <br />
                        <img src={sprites.front_default} alt="peep" className="img-fluid w-50" />
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
                            { stats ? 
                                stats.map((stat, index) => {
                                    return (
                                        <li key={index}>
                                            {stat.stat.name}
                                        </li>
                                    )
                                })
                                :
                                <li>
                                    -
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            { stats ? 
                                stats.map((stat, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={progressBar} aria-valuenow={stat.base_stat} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </li>
                                    )
                                })
                                :
                                <li>
                                    -
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeData