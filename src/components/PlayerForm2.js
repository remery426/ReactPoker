import React, {Component} from 'react';
class PlayerForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      redirect: false
    };

}
  render(){
    return(
      <div>
      <p> Enter Player Twos name and hand then hit the compare hands button to find out the winner </p>
      <p style = {{color:'red'}}> {this.state.errors}</p>
      <div>
      <form onSubmit={this.handleSubmit}>
        <label> Enter Player2 Name: </label>
        <input placeholder="Player 2 Name" name="playerName" />
        <label> Enter Player 2 Hand: </label>
        <input placeholder="Player 2 Hand" id="playerHand" name="hand"/>
        <input className="waves-effect waves-light btn red"  type="submit" value = "Compare Hands!"/>
      </form>
    </div>
  </div>
)
}
}
export default PlayerForm2;
