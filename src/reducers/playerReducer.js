const INITIAL_STATE = {player1: '', player2: '', hand1: '', hand2: ''}
export default (state = INITIAL_STATE, action)=>{
  switch (action.type){
    case 'setPlayer2':
      return{...state, player2:action.payload.name, hand2: action.payload.hand}
    case 'setPlayer1':
      return{...state, player1: action.payload.name, hand1: action.payload.hand}
    default:
      return state;
  }
}
