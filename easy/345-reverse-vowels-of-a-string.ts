// from https://leetcode.com/problems/reverse-vowels-of-a-string/

const vowels: Record<string,number> = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1
};

function reverseVowels(s: string): string {
    let left = 0;
    let right = s.length - 1;
    let split: Array<string> = s.split('');
    while (left < right){
        if (!vowels[split[left].toLowerCase()]){
            left++;
        }
        if (!vowels[split[right].toLowerCase()]){
            right--;
        }

        if (vowels[split[left].toLowerCase()] && vowels[split[right].toLowerCase()]){
            let temp = split[left];
            split[left] = split[right];
            split[right] = temp;
            left++;
            right--;
        }

    }

    return split.join('');
};

console.log(reverseVowels('hello'));

// runtime 53rd percentile
// memory 8th percentile