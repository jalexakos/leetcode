// from https://leetcode.com/problems/number-of-equivalent-domino-pairs/

function numEquivDominoPairs(dominoes: number[][]): number {
    let answer = 0;
    let map: Map<number, number[][]> = new Map();
  
    for (let i = 0; i < dominoes.length; i++) {
      let sum = dominoes[i].reduce((a,b) => a + b);
      if (map.has(sum)) {
          let arr = [...map.get(sum)!, dominoes[i]];
          map.set(sum, arr);
      } else {
          map.set(sum, [dominoes[i]]);
      }
    }
  
    map.forEach((v,k) => {
      if (v.length > 1) {
          for (let i = 0; i < v.length; i++) {
              for (let j = i + 1; j < v.length; j++) {
                  let x = v[i][0] === v[j][0];
                  let y = (v[i][0] + v[j][0]) === k;
                  if (x || y) {
                      answer++;
                  }
              }
          }
      }
    })
  
    return answer;  
  };

// runtime 5th percentile
// memory 5th percentile

// from chatGPT
function numEquivDominoPairsGPT(dominoes: number[][]): number {
    const map: Map<string, number> = new Map();
    let count = 0;
  
    for (let domino of dominoes) {
      // Normalize the domino so the smaller number is always first
      const [a, b] = domino;
      const key = a < b ? `${a},${b}` : `${b},${a}`;
  
      // Increment the count of this normalized domino in the map
      const prevCount = map.get(key) || 0;
      count += prevCount; // Each previous occurrence of this domino forms a pair
      map.set(key, prevCount + 1);
    }
  
    return count;
  }

// runtime 56th percentile
// memory 23rd percentile