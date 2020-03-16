import React, { Component } from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        //Use this. state to set the initial score to 0 and be able to hold onto the variable
        this.state = {
            score:0,
        }

    }

//Create a function that will render when the button is clicked
tellThePlayer = () => {
    //calls the function established in the parent container inside of the parameters we are inserting the object name also established inside of the parent container
    this.props.updatePlayer(this.props.player)
    //Add another method to run when the button is clicked// take the previously set state property score and update the value by 1
    this.setState({score : this.state.score + 1});

}

render(){
    return (
        <div>
            {/* Creating a label for the names established in the parent container and referencing them with object literal notation */}
            <h2>Player #{this.props.player}</h2>
            {/* Create a score label inside h2 tags and set its value to the current state of score */}
            <h3>Score: {this.state.score}</h3>
            {/* Creating a button in the html and place the function reference above inside of an onClick function */}
            <button className='button' onClick={this.tellThePlayer}>Who Clicked Button</button>
        </div>
    )
}
}


export default Player;