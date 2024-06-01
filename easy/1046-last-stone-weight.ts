// from https://leetcode.com/problems/last-stone-weight/description/

function findLargestAndSecondIdx(arr: Array<number>): Array<number> {
    let largest;
    let secondLargest;
    
    if (arr[0] > arr[1]) {
      largest = 0;
      secondLargest = 1;    
    } else {
      largest = 1;
      secondLargest = 0;
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > arr[largest]) {
            secondLargest = largest;
            largest = i;
        } else if (arr[i] >= arr[secondLargest]) {
            secondLargest = i;
        }
    }

    return [largest, secondLargest];
}

function lastStoneWeight(stones: number[]): number {
    let stonesCopy = [...stones];

    while (stonesCopy.length > 1) {
        const [largeIdx, secondLargeIdx] = findLargestAndSecondIdx(stonesCopy);

        let diff = stonesCopy[largeIdx] - stonesCopy[secondLargeIdx];
        if (diff === 0) {
            if (largeIdx > secondLargeIdx) {
                stonesCopy.splice(largeIdx, 1);
                stonesCopy.splice(secondLargeIdx, 1);
            } else {
                stonesCopy.splice(secondLargeIdx, 1);
                stonesCopy.splice(largeIdx, 1);
            }
        } else {
            stonesCopy[largeIdx] = diff;
            stonesCopy.splice(secondLargeIdx, 1);
        }
    }

    return stonesCopy[0] || 0;
};

// runtime 98th percentile
// memory 73rd percentile