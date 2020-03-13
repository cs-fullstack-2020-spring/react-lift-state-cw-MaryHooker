import React, {Component} from 'react';
import Player from './Player';

class Parent extends Component{
    constructor(props){
        super(props);
        
        this.state = {
           
        }
    }

    updatePlayer = (playerNum) =>{
        this.props.
    }

  
    render(){
        return(
            <div>
                <Player player1='1'/>
                <Player player2='2' />
        <h1>Player {} clicked the button</h1>
            </div>
        )
    }
}

export default Parent;

// Create a Player component with player # label and a button. 
// Call it twice from the parent component. 
// In the parent component print out the Player number that pressed the button last.