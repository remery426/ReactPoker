import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {compareHands} from '../pokerLogic/compareHands'
import {Link} from 'react-router-dom'
class Winner extends Component {
  constructor(props){
    super(props)
    this.state = {
      victory: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);

  }
  componentWillMount(){
    this.setState({victory: ''})
  }
  componentDidMount(){
    if(this.props.hand1 && this.props.hand2){
    const winner = compareHands(this.props.hand1,this.props.hand2)
    if(winner[0] == 0){
      var message = "It's a tie game!"
      this.setState({victory:message})
    }
    if(winner[0]==1){
      var message = this.props.player1 +  " wins with " + winner[1]
      this.setState({victory:message})
    }
    if(winner[0]==2){
      var message = this.props.player2 + " wins with " + winner[1]
      this.setState({victory:message})
    }
  }
  }
  render(){
    return(
      <div>
        <h1 style = {{color:'red'}}> {this.state.victory} </h1>
        <Link  to="/PlayerForm" className="waves-effect waves-light btn red">Play Again?</Link>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  const {player1, hand1, player2, hand2} = state.player;
  return {player1, hand1, player2, hand2};
}
export default connect(mapStateToProps,actions)(Winner);
