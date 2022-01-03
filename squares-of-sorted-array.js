// Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
  //create array for squared values
  let squared =[]
  //iterate thru nums
  for(let i = 0; i <= nums.length - 1; i++) {
    //add squared value to squared array
   squared.push(nums[i] * nums[i])
 }
 //declare and set sorted array to squared sorted with a comparison arg for digits
 // (.sort() sorts strings normally so comparison is needed for digits)
 let sorted = squared.sort((a,b)=> a - b)
 return sorted
}

array = [1 , 5, 3, 6, -2, 7]
console.log(sortedSquares(array))