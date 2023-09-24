function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let index = m + n - 1;
  while (n > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
    index--;
  }
}
