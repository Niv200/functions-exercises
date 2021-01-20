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
  // your code here
  let arr = [];
  for(let i = 0; i < str.length; i++){
    let x = i + 1;
    arr[i] = str.substring(i, x);
  }
  //
    
    substrings("dog");
/////////////////////////////
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

//Question 4
function myPower(x, n) {
  let num = Math.pow(x, n);
  return num;
}

//abanibiabohebe
//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return str;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let upTo = 10; //Specify how many numbers to look up for before returning false.
  for(let x = 1; x <= upTo; x++){
    let firs = Math.pow(2, x);
    let bra = Math.pow(2, x + 1) - 1
    if(firs * bra === num){
      return true;
    }
  }
  return false;
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
