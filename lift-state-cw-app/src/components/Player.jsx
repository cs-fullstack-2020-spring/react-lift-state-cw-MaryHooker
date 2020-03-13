import React, {Component} from 'react';

class Player extends Component{
    constructor(props){
        super(props);

        this.state = {
            player: 1
        }
    }

    tellThePlayer = ()=>{

        let newPlayer =this.state.player
        this.setState(
            {
                player = newPlayer
            }
        )
        
    }

    // this.props.updatePlayer(this.)

    render(){
        return(
            <div>
                <h1>Player #{this.props.player1}</h1>
                <h1>Player #{this.props.player2}</h1>
                <button onClick={this.tellThePlayer}>Who Clicked Button</button>
            </div>
        )
    }
}

export default Player;