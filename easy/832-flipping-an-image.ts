// from https://leetcode.com/problems/flipping-an-image/description/

function flip(arr: Array<number>) {
    let flippedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) flippedArr.push(0);
        else flippedArr.push(1);
    }

    return flippedArr;
}

function reverse(arr: Array<number>) {
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) reversedArr.push(1);
        else reversedArr.push(0);
    }

    return reversedArr;
}

function flipAndInvertImage(image: number[][]): number[][] {
    let newImage: number[][] = [];
    for (let i = 0; i < image.length; i++) {
        newImage.push(reverse(flip(image[i])));
    }

    return newImage;
};

// runtime 51st percentile
// memory 91st percentile