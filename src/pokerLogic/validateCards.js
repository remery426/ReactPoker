export function validateCards(hand){
  var card_arr = []
  var error = ""
  var card =""
  var dupe = false
  for( var i = 0; i <hand.length; i++){
    if (hand[i] == ","){
      if(card_arr.includes(card)){
        dupe = true
      }
      card_arr.push(card)
      card = ""
    }
    else{
      if (hand[i] != " "){
        card += hand[i]
      }
    }
  }
  card_arr.push(card)
  if(dupe == true){
    error += "\n  Duplicate card"
}
  if(card_arr.length!=5){
    error+="\n Wrong number of cards"
  }
  var nums = "23456789AKQJakqj"
  var suits = "SCHDschd"
  var invalid_card = false
  for( var i = 0; i <card_arr.length; i++){
    if(suits.indexOf(card_arr[i][(card_arr[i]).length -1]) <=-1){
      invalid_card = true
    }
    if(nums.indexOf(card_arr[i][0])<=-1){
      if(card_arr[i][0] != "1" || card_arr[i][1]!="0"){
        invalid_card = true
      }
    }
    if(card_arr[i].length>2 ){
      if(card_arr[i][0] != "1" || card_arr[i][1]!="0"){
        invalid_card = true
      }
    }
  }
  if(invalid_card == true){
    error += "\n At least one of the cards is invalid"
}
  if(error){
    var final_err = "It appears your hand has the following errors:" + error
  }
  return final_err
}
