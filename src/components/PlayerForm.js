import React,{Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import {validateCards} from '../pokerLogic/validateCards'

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderContent = this.renderContent.bind(this);

}

  handleSubmit(event){
    event.preventDefault()
    if(this.props.player1 == ''){
      var errors=""
      if(event.target.playerName.value == ""){
        errors = "Please enter valid name! "
      }
      if(validateCards(event.target.playerHand.value)){
      errors += validateCards(event.target.playerHand.value)
    }
      this.setState({errors: errors})
      if (!errors){
        this.props.setPlayer1({name:event.target.playerName.value, hand: event.target.playerHand.value})
        event.target.playerName.value = ""
        event.target.playerHand.value = ""
      }
  }
  else{
    var errors=""
    if(event.target.playerName.value == ""){
      errors = "Please enter valid name! "
    }
    if(validateCards(event.target.playerHand.value)){
    errors += validateCards(event.target.playerHand.value)
  }
    if(errors){
    this.setState({errors: errors})
  }
    if (!errors){
      this.props.setPlayer2({name:event.target.playerName.value, hand: event.target.playerHand.value});
      event.target.playerName.value = ""
      event.target.playerHand.value = ""
      this.setState({redirect:true})
    }
  }
}
  renderContent(){
    if(this.state.redirect){
      return <Redirect to="/Winner"/>
    }
    if (this.props.player1 == "" || this.props.hand1 == ""){
      return(
      <div>
        <p> Enter Player One's name and 5 card hand into the form below.  Please enter your cards with the value first then the suit, with each card seperated by a comma and a space.  Please see the following example for further instructions: "2C, 10H, JD, QS, 5S" (don't include quotes in input) would represent two of clubs, ten of hearts, jack of diamonds, queen of spades and 5 of spades.</p>
        <p style= {{color: 'red'}}>{this.state.errors}</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> Enter Player 1 Name: </label>
            <input placeholder="Player 1 Name" name="playerName" />
            <label> Enter Player 1 Hand: </label>
            <input placeholder="Player 1 Hand" id="playerHand" name="hand"/>
            <input className="waves-effect waves-light btn red"  type="submit" value = "Set Hand 1"/>
          </form>
        </div>
      </div>
    )
  }
    else{
      return(
        <div>
          <p> Enter Player Two's name and hand then hit the compare hands button to find out the winner </p>
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

  render(){
    return(
        <div>
        {this.renderContent()}
        </div>
    )
  }
}
const mapStateToProps = (state) =>{
  const {player1, hand1} = state.player;
  return {player1, hand1};
}
export default connect(mapStateToProps, actions)(PlayerForm)
