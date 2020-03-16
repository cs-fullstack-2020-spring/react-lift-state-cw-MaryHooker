import React, { Component } from 'react';
import Player from './Player';

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastClicked: 'Who',

        }
    }

    //Create a function that will update the state of who clicked the button last
    updatePlayer = (playerNum,score) => {
        //call the function that will change the current state and insert the parameter as the new value for the object
        this.setState({ lastClicked: playerNum });
    }


    render() {

        return (
            <div>
                {/* get a referecne to the current property and value inside of state */}
                <h1>Player {this.state.lastClicked} clicked the button</h1>
                {/* Call the child component twice and insert a variable to hold the values we want to be able to reference inside of the child component */}
                <Player player='1' updatePlayer={this.updatePlayer}/>
                <Player player='2' updatePlayer={this.updatePlayer}/>
            </div>
        )
    }
}

export default Parent;

// Create a Player component with player # label and a button. 
// Call it twice from the parent component. 
// In the parent component print out the Player number that pressed the button last.