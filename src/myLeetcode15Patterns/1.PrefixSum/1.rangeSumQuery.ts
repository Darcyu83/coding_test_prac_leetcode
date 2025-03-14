class NumArray {
  prefix: number[] = [];
  constructor(nums: number[]) {
    for (const num of nums) {
      this.prefix.push(num + (this.prefix[this.prefix.length - 1] || 0));
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right] - (this.prefix[left - 1] || 0);
  }
}
