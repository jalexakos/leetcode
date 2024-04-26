// from https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels: string, stones: string): number {
    let jewelsHash: Record<string,number> = {};
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        jewelsHash[jewels[i]] = (jewelsHash[jewels[i]] || 0) + 1;
    }

    for (let x = 0; x < stones.length; x++) {
        if (jewelsHash[stones[x]]) {
            count++;
        }
    }

    return count;
};

// runtime 47th percentile
// memory 6th percentile

// testing switching the hash to the stones instead of the jewels
function numJewelsInStonesAlt(jewels: string, stones: string): number {
    let stonesHash: Record<string,number> = {};
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        stonesHash[stones[i]] = (stonesHash[stones[i]] || 0) + 1;
    }

    for (let x = 0; x < jewels.length; x++) {
        if (stonesHash[jewels[x]]) {
            count += stonesHash[jewels[x]];
        }
    }

    return count;
};

// runtime 70th percentile
// memory 9th percentile