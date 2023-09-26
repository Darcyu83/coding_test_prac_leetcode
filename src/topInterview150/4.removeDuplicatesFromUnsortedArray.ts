export function removeDuplicates2(nums: number[]): number {
  let currIdx = 0;

  let coupled = false;

  for (let i = 0; i < nums.length; i++) {
    // if (coupled && currIdx % 2 === 0) {

    //   coupled = false;
    //   currIdx++;
    //   continue;
    // }

    console.log("==== ", nums[currIdx], nums[i + 1]);

    if (coupled && nums[currIdx - 1] !== nums[i]) {
      nums[++currIdx] = nums[i];
      coupled = false;
      continue;
    }
    if (coupled && nums[currIdx - 1] === nums[i]) {
      continue;
    }

    if (!coupled && nums[currIdx] === nums[i + 1]) {
      nums[++currIdx] = nums[i + 1];
      coupled = true;
    }
  }

  return currIdx + 1;
}
