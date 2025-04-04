/**
 * 
✅ modMap.has(mod)을 왜 확인하나요?
이 조건은 아래와 같은 수학적 원리에 기반합니다:

만약 prefixSum[j] % k === prefixSum[i - 1] % k 라면,
sum[i, j] (i부터 j까지의 연속된 합)은 k로 나누어떨어집니다.

즉, 누적합의 나머지(mod)가 같다는 것은,
그 사이 구간의 합이 k로 나누어떨어진다는 의미입니다.



modMap은 특정 mod 값이 처음 등장한 인덱스를 저장해놓는 Map입니다.

우리가 현재 보고 있는 mod 값이 이전에 등장했는지 확인하려면 modMap.has(mod)를 사용합니다.

만약 이미 존재한다면:

예전에 그 mod 값이 나온 위치부터 지금 위치까지의 합은 k의 배수입니다.

즉, 유효한 부분 배열(subarray)를 찾은 것입니다.


 */

// sum[i, j] = sum[0, j] - sum[0, i-1]
// const nums = [23, 2, 6, 4, 7];
// nums[1..3] = [2, 6, 4]
// sum[1, 3] = 2 + 6 + 4 = 12
// sum[1, 3] = sum[0, 3] - sum[0, 0]
//           = 35 - 23
//           = 12 ✅

// prefixSum[j] % k === prefixSum[i - 1] % k 라면,
// sum[i, j] (i부터 j까지의 연속된 합)은 k로 나누어떨어집니다.
// 즉, 누적합의 나머지(mod)가 같다는 것은,

// k = 5
// index 3: value 18 has mod 3
// index 10: value 43 has mod 3
// 43 - 18 is a multiple of k 5

// 그 사이 구간의 합이 k로 나누어떨어진다는 의미입니다

export function checkSubarraySum(nums: number[], k: number): boolean {
  let prefixSum = 0;
  const modMap = new Map<number, number>();
  modMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let mod = prefixSum % k;
    if (mod < 0) mod += k;

    if (modMap.has(mod)) {
      const prevIndex = modMap.get(mod)!;
      if (i - prevIndex >= 2) {
        // element range should be greater than 2
        return true;
      }
    } else {
      modMap.set(mod, i);
    }
  }

  return false;
}
