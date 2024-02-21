// from https://leetcode.com/problems/minimum-index-sum-of-two-lists/

function findRestaurant(list1: string[], list2: string[]): string[] {
    let map: Map<string,number[]> = new Map();
    let answer: string[] = [];
    let minIdx: number = list1.length + list2.length;
  
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], [i]);
    };
  
    for (let i = 0; i < list2.length; i++) {
      if (map.has(list2[i])){
          let x: number[] = map.get(list2[i]) as number[];
          map.set(list2[i], [...x, i]);
      }
    };
    map.forEach((indices, string) => {
      if (indices.length === 2) {
          if ((indices[0] + indices[1]) < minIdx) {
              answer = [string];
              minIdx = indices[0] + indices[1];
          } else if ((indices[0] + indices[1]) === minIdx) {
              answer.push(string);
          }
      }
    })

    return answer;
  };

// runtime 81st percentile
// memory 16th percentile