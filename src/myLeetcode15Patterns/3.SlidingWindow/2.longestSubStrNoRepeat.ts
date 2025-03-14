function lengthOfLongestSubstring(s: string): number {
  let maxlength = 0,
    subStr = "";

  for (const char of s) {
    if (subStr.includes(char)) {
      subStr = subStr.slice(subStr.indexOf(char) + 1);
    }

    subStr += char;

    maxlength = Math.max(maxlength, subStr.length);
  }

  return maxlength;
}
