//Question 1
function myReverse(str) {
  // your code here
  let arr = str.split('');
  let msg = "";
  for(let i = 0; i < arr.length; i++){
    msg = arr[i] + msg;
  }
  return msg;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for(let i = 0; i > str.length; i++){
    
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  let array = str.split(" ");
  let finalWord = "";
  for(let i = 0; i < array.length; i++){
    let wordOrigin = array[i];
    let firstLetter = wordOrigin.charAt(0);
    let restWord = wordOrigin.slice(1);
    let word = firstLetter.toUpperCase() + restWord;
    finalWord = finalWord + " " + word
  }
    return finalWord.slice(1);
} 

// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
