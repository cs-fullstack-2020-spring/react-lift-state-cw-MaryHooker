import React,{Component} from 'react';

class Player extends Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
        }
    }
    //function to run when button is clicked
    buttonClicked = () =>{
        //pull down parent function and place pulled down name inside of parameter
        this.props.updatePlayer(this.props.name)
        //reset state to be itself plus 1 everytime button is clicked
        this.setState(
            {
                score: this.state.score + 1
            }
        )
    }

    render(){
        return(
            <div>
                <h2>Player: {this.props.name}</h2>
                <h2>Score: {this.state.score}</h2>
                <button onClick={this.buttonClicked}>Who Hit Button</button>
            </div>
        )
    }
}

export default Player;