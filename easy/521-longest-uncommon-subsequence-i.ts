// from https://leetcode.com/problems/longest-uncommon-subsequence-i/description/

function findLUSlength(a: string, b: string): number {
    if (a.length > b.length) return a.length;
    else if (a.length < b.length) return b.length;
    if (a.length === b.length) {
      if (a === b) return -1;
      return b.length;
    }

    return b.length;
  };

// runtime 100th percentile
// memory 30th percentile