import React,{Component} from 'react';
import Player from './Player';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            whoClickedButton: '',
         }
    }

    //function to pass down to child and update which player clicked the button last
    updatePlayer =(player,score) =>{
        this.setState(
            {
                whoClickedButton: player
            }
        )
    }


    render() { 
        return ( 
            <div>
                <h1>{this.state.whoClickedButton} clicked the button last!</h1>
                <Player name='Mary' updatePlayer={this.updatePlayer}/>
                <Player name='Bob' updatePlayer={this.updatePlayer}/>

            </div>
         );
    }
}
 
export default AppContainer;