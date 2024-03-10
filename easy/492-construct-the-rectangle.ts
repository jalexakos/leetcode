// from https://leetcode.com/problems/construct-the-rectangle/description/

function constructRectangle(area: number): number[] {
    if (area === 1) return [1,1];
    let smallDiff = area;
    let answer: number[] = [];
    for (let num = 0; num < area; num++) {
        if (area % num === 0 && Math.abs(num - (area / num)) < smallDiff) {
                smallDiff = Math.abs(num - (area / num));
                if (num < (area / num)) {
                    answer = [(area / num), num];
                } else {
                    answer = [num, (area / num)];
                }
        }
    }

    return answer;
};

// runtime 5th percentile
// memory 88th percentile

// brilliant solution I found looking through leetcode
function constructRectangleOpt(area: number): number[] {
    let num = Math.floor(Math.sqrt(area));
    while (area % num !== 0) {
      num--;
    }
  
    if (num > area / num) {
      return [num, area / num];
    } else {
      return [area / num, num];
    }
  };

// runtime 100th percentile
// memory 68th percentile