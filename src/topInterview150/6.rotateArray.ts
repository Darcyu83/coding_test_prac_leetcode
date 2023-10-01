export function rotateArry(nums: number[], k: number): void {
  const copied = [...nums];
  for (let i = 0; i < copied.length; i++) {
    console.log("====1 ", copied[i]);
    nums[(i + k) % nums.length] = copied[i];
  }

  console.log(nums);
}
