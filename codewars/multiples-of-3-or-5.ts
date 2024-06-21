// from https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

export class Challenge {
    static solution(number: number) {
      let answers = 0;
      
      for (let i = 0; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0){
          answers += i;
        } else if (i % 3 === 0) {
          answers += i;
        } else if (i % 5 === 0) {
          answers += i;
        }
      }
      
      return answers;
    }
  }
