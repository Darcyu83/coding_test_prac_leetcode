// export function twoSum(nums: number[], target: number): number[] {
//   let indices: number[] = [];

//   nums.map((numPrev, idx1) => {
//     const nextIdx = idx1 + 1;
//     const nextNum = nums[nextIdx];
//     if (nextNum === undefined || nextNum === null) return;
//     if (numPrev + nextNum === target) return (indices = [idx1, nextIdx]);

//     nums.map((numNext, idx2) => {
//       if (indices.length !== 0) return;

//       if (idx2 <= idx1) return;

//       if (numPrev + numNext === target) {
//         return (indices = [idx1, idx2]);
//       }
//     });
//   });

//   return indices;
// }

// brute-force approach : 주먹구구식 접근 (무차별 접근)
// export function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

// HashMap Approach
// export function twoSum(nums: number[], target: number): number[] {
//   const numToIndex = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (numToIndex.has(complement)) {
//       return [numToIndex.get(complement), i];
//     }

//     numToIndex.set(nums[i], i);
//   }

//   return [];
// }

// Two pass hashmap approach
// export function twoSum(nums: number[], target: number): number[] {
//   const numToIndex: { [key: number]: number } = {};
//   // First pass : Populate the object

//   for (let i = 0; i < nums.length; i++) {
//     numToIndex[nums[i]] = i;
//   }

//   // Second pass : Check for the complement(보상값)
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in numToIndex && numToIndex[complement] !== i) {
//       return [i, numToIndex[complement]];
//     }
//   }

//   return [];
// }

// Two Pointer Approach
export function twoSum(nums: number[], target: number): number[] {
  const numsWithIndex = nums.map((num, index) => [num, index]);

  numsWithIndex.sort((a, b) => a[0] - b[0]);

  // console.log("numsWithIndex === 1", numsWithIndex)
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];

    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
