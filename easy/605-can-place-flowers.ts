// from https://leetcode.com/problems/can-place-flowers/description/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;
    if (flowerbed.length === 1) return flowerbed[0] === 0;
    if (flowerbed.length === 2) {
        if (n === 2) return false;
        if (flowerbed[0] === 1 || flowerbed[1] === 1) return false;
        return true;
    }

    let count = 0;
    let i = 0;


    while (i < flowerbed.length) {
        if (i === 0 || i === flowerbed.length - 1) {
            if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                count++;
                i += 2;
            } else if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }  else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }

    return count >= n;
};

// runtime 80th percentile
// memory 24th percentile