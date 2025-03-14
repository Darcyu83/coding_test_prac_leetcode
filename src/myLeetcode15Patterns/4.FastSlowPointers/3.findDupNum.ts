// the element of nums is in the rage [1, n]
// nums length is n + 1 ;

// [1,3,4,2,2]
// element can use and track as a index ;
function findDuplicate(nums: number[]): number {
  // !! slow 와 fast 스텝의 차이는 2가 최적이다.

  let slowIdx = nums[0];
  let fastIdx = nums[nums[0]];
  // Phase 1: Detect cycle
  while (slowIdx !== fastIdx) {
    slowIdx = nums[slowIdx];
    fastIdx = nums[nums[fastIdx]];
  }
  // Phase 2: Find the entrance to the cycle
  // Start from the beginning again
  let startIdx = 0;
  while (startIdx !== slowIdx) {
    startIdx = nums[startIdx];
    slowIdx = nums[slowIdx];
  }
  return slowIdx;
}
