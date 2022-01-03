// Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
const findNumbers = (nums) => {
  //keep track of evenNums
  let evenNums = 0;
  // iterate through array
  for(let i = 0; i <= nums.length - 1; i++) {
    let stringedNum = nums[i].toString();
    let stringArrayed = stringedNum.split("");
    if (stringArrayed.length % 2 === 0) {
      evenNums++
    }
  }
  return evenNums
}


