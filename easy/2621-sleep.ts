// from https://leetcode.com/problems/sleep/

async function sleep(millis: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(resolve, millis);
    });
  }
  
  
  /** 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
   */

// runtime 32nd percentile
// memory 30th percentile