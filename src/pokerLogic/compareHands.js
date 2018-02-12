function scoreHand(hand){
  ///variables that will be used to determine handscore
  var flush = false
  var straight =true
  var straight_flush = false
  var pair = 0
  var three_kind = false
  var four_kind= false
  var high_card = 0
  var high_pair = 0
  var suits = {}
  var numbers = {}
  var is_first = true
  var nums= "0123456789"
  var faces = "AKQJ"
  ///create dictionaries that contain counts for suits and card values
  for(var i=0; i <hand.length; i++){
    if(nums.indexOf(hand[i])>=0 ){
        if (!numbers[parseInt(hand[i])]) {
          numbers[parseInt(hand[i])] = 1
      }
      else{
        numbers[parseInt(hand[i])] += 1
      }
    }
    else if(faces.indexOf(hand[i].toUpperCase())>=0){
      var match = {"J": 11, "Q": 12, "K":13, "A": 14 }
      var int_val = match[hand[i].toUpperCase()]
      if (!numbers[int_val]) {
        numbers[int_val] = 1
    }
    else{
      numbers[int_val] += 1
    }
    }
    else{
      if(hand[i]!= " " && hand[i]!=","){
        if(!suits[hand[i].toUpperCase()]){
          suits[hand[i].toUpperCase()] = 1
        }
        else{
          suits[hand[i].toUpperCase()] +=1
        }
      }
    }
  }

///FIX 1 0  v 10 issue
if(numbers[0]){

numbers[10] = numbers[0]
delete(numbers[0])
delete(numbers[1])
}
//array that will be used to test straights
var straight_arr = []
///check pairs
for(var key in suits){
  if(suits[key]==5){
    flush = true
  }
}
for(var key in numbers){
  straight_arr.push(parseInt(key))
  if(numbers[key]==2){
    if(numbers[key]>high_pair){
      high_pair = numbers[key]
  }
  pair+=1
}
  if(numbers[key] ==3){
    three_kind =true
    high_pair= numbers[key]
  }
  if(numbers[key]==4){
    four_kind = true
    high_pair = numbers[key]
  }
}
//check for straights

var sorted_arr = straight_arr.sort(function(a,b){return a - b})

if (sorted_arr.length==5){
  for(var i = 0; i<sorted_arr.length-1; i++){
    if(sorted_arr[i]+1 != sorted_arr[i+1]){
      straight = false
    }
  }
}
else{
  straight = false
}
if (flush === true && straight === true){
  return["Straight Flush", sorted_arr]
        }
if (four_kind === true){
  return["Four of a kind", sorted_arr]
}
if (pair === 1 && three_kind === true){
      return['Full house', straight_arr]
          }
if (flush === true){
  return ["Flush", straight_arr]
}
if(straight === true){
        return ["Straight", straight_arr]
          }
  if(three_kind == true){
          return ["Three of a Kind", straight_arr]
          }
if (pair==2){

  return ["Two Pair", straight_arr]
          }
if (pair ==1){
            return ["Pair", straight_arr]
          }
  else{
            return [straight_arr]
          }
}




export function compareHands(hand1, hand2){
  var score1 = scoreHand(hand1)
  var score2 = scoreHand(hand2)

  if(score1.length>score2.length){
    return [1,score1[0]]
  }
  if (score2.length>score1.length){

    return [2,score2[0]]
  }

  var compare_dict = {'Straight Flush' : 8, 'Four of a kind': 7, 'Full House': 6, 'Flush': 5, 'Straight': 4, 'Three of a Kind': 3, 'Two Pair':2, 'Pair':1}
  if (compare_dict[score1[0]]>compare_dict[score2[0]]){
    return [1,score1[0]]
  }
  else if(compare_dict[score2[0]]>compare_dict[score1[0]]){

    return [2,score2[0]]
  }
  else{
    var index = 4
    while(index >=0){
                if (score1[score1.length-1][index] == score2[score2.length-1][index]){
                    index-=1
                  }
                else{
                    if(score1[score1.length-1][index]>score2[score2.length-1][index]){
                        return [1,score1[0]]
                      }
                    else{
                      return [2,score2[0]]
                      }
                      }
            return [0,"Tie"]
          }
  }
}
