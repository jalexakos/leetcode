// Minimum Time to Type Word Using Special Typewriter
// from https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/

const alphabetLocal: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  function findShortestRoute(endChar: string, startChar: string): number {
      let endCharIdx = alphabetLocal.indexOf(endChar);
      let startCharIdx = alphabetLocal.indexOf(startChar);
      if (endCharIdx > startCharIdx) {
          let lToR = endCharIdx - startCharIdx;
          let rToL = (alphabetLocal.length - endCharIdx) + startCharIdx;
          return Math.min(lToR, rToL);
      } else if (endCharIdx < startCharIdx) {
          let lToR = (alphabetLocal.length - startCharIdx) + endCharIdx;
          let rToL = startCharIdx - endCharIdx;
          return Math.min(lToR, rToL);
      }
  
      return 0;
  }
  
  function minTimeToType(word: string): number {
      let seconds = 0;
      let startChar = "a";
      for (let i = 0; i < word.length; i++) {
          seconds += findShortestRoute(startChar, word[i]);
          seconds += 1;
          startChar = word[i];
      }
  
      return seconds;
  };