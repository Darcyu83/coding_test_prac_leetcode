// https://www.youtube.com/watch?v=73r3KWiEvyk
function rob(nums: number[]): number {
  // let rob1 = 0,
  //   rob2 = 0;

  // // [rob1, rob2, n, n+1 ,...]
  // for (const money of nums) {
  //   let newMaxRob = Math.max(money + rob1, rob2);
  //   rob1 = rob2;
  //   rob2 = newMaxRob;
  // }

  let rob1 = 0,
    rob2 = 0;

  // [rob1Odd, rob2Even, n, n+1 ,...]
  for (const money of nums) {
    let prevMax = rob2;
    rob2 = Math.max(money + rob1, rob2);
    rob1 = prevMax;
  }

  return rob2;
}

// Approach: Dynamic Programming (Bottom-Up)
// Space Optimization
function robspace(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let maxMoney2HousesAgo = 0; // dp[i - 2]
  let maxMoneyPrevHouse = 0; // dp[i - 1]

  for (const num of nums) {
    let temp = maxMoneyPrevHouse;

    maxMoneyPrevHouse = Math.max(maxMoneyPrevHouse, maxMoney2HousesAgo + num);
    maxMoney2HousesAgo = temp;
  }
  return maxMoneyPrevHouse;
}

// Tabulation
function robTb(nums: number[]): number {
  let n = nums.length;
  let state = new Array(n).fill(-1);

  //if there is only one house im just robbing that
  state[n - 1] = nums[n - 1];

  //if there are only 2 houses i would rob the one which gives me max
  state[n - 2] = Math.max(nums[n - 1], nums[n - 2]);

  for (let i = n - 3; i >= 0; i--) {
    //else i would be having 2 chocies either to rob a house or skip it
    state[i] = Math.max(nums[i] + state[i + 2], state[i + 1]);
  }
  return state[0];
}

// Recursive Memo
function robMemo(nums: number[]): number {
  const dp = new Array(nums.length).fill(-1);
  const robber = (index: number): number => {
    if (index >= nums.length) {
      return 0;
    }

    if (dp[index] !== -1) {
      return dp[index];
    }
    return (dp[index] = Math.max(
      nums[index] + robber(index + 2),
      robber(index + 1)
    ));
  };

  return robber(0);
}
