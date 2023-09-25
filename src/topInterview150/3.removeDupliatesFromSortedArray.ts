export function removeDuplicates(nums: number[]): number {
  //   let lastIndex = nums.length - 1;
  //   while (lastIndex > 0) {
  //     if (nums[lastIndex] === nums[lastIndex - 1]) {
  //       nums.splice(lastIndex, 1);
  //     }
  //     lastIndex--;
  //   }
  //   return nums.length;
  let startIndex = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[startIndex] !== nums[i]) {
      console.log("nums ==== ", nums[startIndex], nums[i]);
      nums[++startIndex] = nums[i];
    }

    i++;
  }

  return startIndex + 1;
}
