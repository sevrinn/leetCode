//Max Consecutive Ones - leetcode
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
  //keep track of onesCount
  let onesCount = 0;
  //keep track of maxConsecutiveOnes
  let maxConsecutiveOnes = 0;

  //iterate through array
  for (let i = 0; i <= nums.length -1; i++) {
    
    //if item in array is 1, 
    if (nums[i] == 1) {
      //add it to onesCount
      onesCount++;
      //if onesCount is gt maxConsecutiveOnes
      if (onesCount > maxConsecutiveOnes) {
        //maxConsecutiveOnes equals onesCount
        maxConsecutiveOnes = onesCount;
      }
    } else {
      // reset onesCount to 0;
      onesCount = 0;
    }
         
  }
    //return maxConsecutiveOnes
   return maxConsecutiveOnes;      
};

