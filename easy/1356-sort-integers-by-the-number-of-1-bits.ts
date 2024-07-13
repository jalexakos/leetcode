// Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

function bitCount(num: number): number {
    let bits = (num).toString(2);
    let count = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '1') count++;
    }
    return count;
};

function sortByBits(arr: number[]): number[] {
    let mostBits = 0;
    let map: Map<number, number[]> = new Map();
    let answer: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let count = bitCount(arr[i]);
        if (map.has(arr[i])) {
            let instance = map.get(arr[i])![1];
            map.set(arr[i], [count, instance + 1]);
        } else {
            map.set(arr[i], [count, 1]);
        }
        if (count > mostBits) mostBits = count;
    };

    for (let i = 0; i <= mostBits; i++) {
        let bitCountArr: number[] = [];

        map.forEach((v,k) => {
            if (v[0] === i) {
                let instances = v[1];
                while (instances > 0) {
                    bitCountArr.push(k);
                    instances--;
                }
            }
        });

        bitCountArr.sort((a,b) => a - b);
        answer = answer.concat(bitCountArr);
    }

    return answer;
};

// runtime 95th percentile
// memory 39th percentile