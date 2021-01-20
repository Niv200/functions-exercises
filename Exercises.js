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
//  your code here
//I couldnt do Q2 any better sorry :( .
  let array = [];
  let arr = str.split('');
  let first = arr[0];
  let second = arr[1];
  let third = arr[2];
  array.push(first); 
  array.push(first + second);
  array.push(first + second + third);
  array.push(second);
  array.push(second + third);
  array.push(third);
  return array;
}

//Question 3
function allCaps(str) {
  //  your code here
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

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let letter = "";
  let arr = [];
  let nums = 0;
  for(let x = 1; x < str.length; x++){
    let z = str.slice(x, x + 1);
    let count = 0;
    for(let j = 0; j < str.length; j++){
      let z2 = str.slice(j, j + 1);
      /////////////////
      if(z === z2){
        count = count + 1;
      }
      ////////////////
    }
    arr.push({'count': count, 'letter': z});
  }
  for(let k = 0; k < str.length; k++){
    if(arr[k]['count'] === 1){
      return arr[k]['letter'];
    }
  }
  return arr;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let upTo = 10; //Specify how many numbers to look up for before returning false and giving up.
  for(let x = 1; x <= upTo; x++){
    let firs = Math.pow(2, x);         //formulas to calculate
    let bra = Math.pow(2, x + 1) - 1   //if a number is perfect
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
