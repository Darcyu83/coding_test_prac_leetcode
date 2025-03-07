// backtracking
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, currentSubset: number[]) {
    result.push([...currentSubset]);

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);

      backtrack(i + 1, currentSubset);

      currentSubset.pop();
    }
    
  }

  backtrack(0, []);

  return result;
}

function subsets0(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i0: number, cur: number[]) {
    for (let i = i0; i < nums.length; i++) {
      const res = [...cur, nums[i]];
      result.push(res);
      dfs(i + 1, res);
    }
  }

  dfs(0, []);
  return result;
}

function subsets1(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i: number, cur: number[]) {
    if (i === nums.length) {
      result.push(cur);
      return;
    }

    dfs(
      i + 1,
      cur.filter((el) => el !== nums[i])
    );
    dfs(i + 1, cur);
  }

  dfs(0, nums);

  return result;
}

function subsets2(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i: number, cur: number[]) {
    if (i === nums.length) {
      result.push(cur);
      return;
    }

    dfs(i + 1, cur);
    dfs(i + 1, cur.concat(nums[i]));
  }

  dfs(0, []);

  return result;
}

function subsets3(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(i0: number, cur: number[]) {
    result.push(cur);
    for (let i = i0; i < nums.length; i++) {
      dfs(i + 1, cur.concat(nums[i]));
    }
  }

  dfs(0, []);
  return result;
}
