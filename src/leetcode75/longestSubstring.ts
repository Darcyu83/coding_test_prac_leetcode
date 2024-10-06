export function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let subStr = "";
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    console.log("subStr === 1", i, subStr);

    if (subStr.includes(s[i])) {
      subStr = subStr.slice(subStr.indexOf(s[i]) + 1);
    }

    subStr += s[i];
    console.log("subStr === 2", i, subStr);
    if (maxLength < subStr.length) {
      maxLength = subStr.length;
    }
  }
  return maxLength;
}
