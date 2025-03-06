// readable
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>();

  visited.add(beginWord);

  // Perform BFS
  while (queue.length > 0) {
    const [currentWord, level] = queue.shift()!;

    for (let i = 0; i < currentWord.length; i++) {
      const originalChar = currentWord[i];

      // Try relacing the charater with every letter from 'a' to 'z'
      for (
        let charCode = "a".charCodeAt(0);
        charCode <= "z".charCodeAt(0);
        charCode++
      ) {
        const newChar = String.fromCharCode(charCode);
        if (newChar === originalChar) continue;

        const newWord =
          currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          if (newWord === endWord) {
            return level + 1;
          }

          queue.push([newWord, level + 1]);
          visited.add(newWord);
        }
      }
    }
  }

  return 0;
}

function ladderLengthShorter(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;
  let queue: [string, number][] = [[beginWord, 1]];
  while (queue.length > 0) {
    const [word, steps] = queue.shift()!;
    if (word === endWord) return steps;

    for (let i = 0; i < word.length; i++) {
      for (let i = "a".charCodeAt(0); i < "z".charCodeAt(0); i++) {
        let newWord =
          word.slice(0, i) + String.fromCharCode(i) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord); // 하니씩 삭제하면서 검증
        }
      }
    }
  }
  return 0;
}
