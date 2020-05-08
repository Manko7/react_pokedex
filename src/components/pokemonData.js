import React, { Component } from 'react'
import axios from 'axios';

class PokeData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokeData: [],
            sprites: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.poke_id;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => {
            console.log(res.data);
            this.setState({pokeData: res.data});
            this.setState({sprites: res.data.sprites});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const pokeData = this.state.pokeData;
        const sprites = this.state.sprites;

        return (
            <div>
                {pokeData.name}
                {/* {pokeData.sprites.map((sprite, index) => {
                    <img key={index} src={...sprite} />
                })} */}
                <img src={sprites.front_default} alt="peep" />
            </div>
        )
    }
}

export default PokeData