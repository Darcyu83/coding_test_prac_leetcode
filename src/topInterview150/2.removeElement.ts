export function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    console.log("element ==== ", element);
    if (element !== val) {
      nums[count++] = nums[i];
    }
  }
  console.log("nums ==== ", nums);

  return count;
}
