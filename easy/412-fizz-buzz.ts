// from https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
    let answer = [];
    let num = 1;
    while (num <= n) {
        if (num % 3 === 0 && num % 5 === 0) answer.push('FizzBuzz');
        else if (num % 3 === 0) answer.push('Fizz');
        else if (num % 5 === 0) answer.push('Buzz');
        else answer.push(String(num));
        num++;
    }

    return answer;
};

// runtime 92nd percentile
// memory 9th percentile