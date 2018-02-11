import React,{Component} from 'react';
class PlayerForm extends Component {
  handleSubmit(event){
    console.log(event.target.hand.value)
    event.preventDefault()
  }
  render(){
    return(

      <div>
        <p> Enter Player One's name and 5 card hand into the form below.  Please enter your cards with the value first then the suit, with each card seperated by a comma and a space.  Please see the following example for further instructions: "2C, 10H, JD, QS, 5S" (don't include quotes in input) would represent two of clubs, ten of hearts, jack of diamonds, queen of spades and 5 of spades.</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Player 1 Name" name="playerName" />
            <input placeholder="Player 1 Hand" id="player1Hand" name="hand"/>
            <input className="waves-effect waves-light btn red"  type="submit" value = "Set Hand 1"/>
          </form>
        </div>
      </div>
    )
  }
}
export default PlayerForm
