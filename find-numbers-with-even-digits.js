// Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
const findNumbers = (nums) => {
  //keep track of evenNums
  let evenNums = 0;
  // iterate through array
  for(let i = 0; i <= nums.length - 1; i++) {
    //turn number into string and then into array
    let stringedNumArrayed = nums[i].toString().split("");
    //if the length of stringedNumArrayed is even
    if (stringedNumArrayed.length % 2 === 0) {
      //add it to evenNums
      evenNums++
    }
  }
  return evenNums
}



