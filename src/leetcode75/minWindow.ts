export function minWindow(s: string, t: string): string {
  // 1. Check if `t` is longer than `s`. If so, return an empty string immediately as it's impossible to find a valid window.
  if (t.length > s.length) return "";

  // 2. Create a map to store the frequency of each character in `t`.
  const tFreqMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    // 3. Update the frequency map for each character in `t`.
    tFreqMap.set(t[i], (tFreqMap.get(t[i]) || 0) + 1);
  }

  // 4. Initialize pointers, counters, and variables for tracking the minimum window.
  let left = 0,
    right = 0; // `left` and `right` are the window's start and end indices.
  let have = 0,
    need = tFreqMap.size; // `have` tracks how many of the required characters are in the current window.
  let minLen = Infinity,
    minStartIdx = 0; // `minLen` will track the length of the smallest valid window, `minStart` its starting index.

  // 5. Create a map to track the frequency of characters in the current window of `s`.
  const windowFreqMap = new Map<string, number>();

  // 6. Iterate over the string `s` using the `right` pointer.
  while (right < s.length) {
    const rightChar = s[right]; // 7. Get the current character at the `right` pointer in `s`.

    // 8. If `rightChar` is in `t`, add it to the window frequency map.
    // for the Left Shrink condition
    if (tFreqMap.has(rightChar)) {
      windowFreqMap.set(rightChar, (windowFreqMap.get(rightChar) || 0) + 1);

      // 9. If the frequency of `rightChar` matches the required frequency in `t`, increment the `have` counter.
      if (windowFreqMap.get(rightChar) === tFreqMap.get(rightChar)) {
        have++;
      }
    }

    // 10. Left Shrink Once all required characters are present in the window (i.e., `have === need`), attempt to shrink the window.
    while (have === need) {
      const windowSize = right - left + 1; // 11. Calculate the size of the current window.

      // 12. If the current window is smaller than the previous smallest, update the minimum length and its starting index.
      if (windowSize < minLen) {
        minLen = windowSize;
        minStartIdx = left;
      }

      const leftChar = s[left]; // 13. Get the character at the `left` pointer of the window.

      // 14. If `leftChar` is in `t`, we attempt to remove it from the window and update the counters.
      if (tFreqMap.has(leftChar)) {
        // 15. If the frequency of `leftChar` in the window is the same as required, decrement the `have` counter.
        if (windowFreqMap.get(leftChar) === tFreqMap.get(leftChar)) {
          have--;
        }

        // 16. Decrement the frequency of `leftChar` in the window frequency map.
        windowFreqMap.set(leftChar, (windowFreqMap.get(leftChar) || 0) - 1);
      }

      left++; // 17. Move the `left` pointer to the right to shrink the window.
    }

    right++; // 18. Move the `right` pointer to the right to expand the window.
  }

  // 19. If a valid window was found, return the substring; otherwise, return an empty string.
  return minLen === Infinity
    ? ""
    : s.substring(minStartIdx, minStartIdx + minLen);
}
