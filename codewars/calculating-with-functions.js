// from https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function handleOperation(...args) {
    switch (args[0][0]) {
        case "+":
          return args[0][2] + args[0][1];
        case "-":
          return args[0][2] - args[0][1];
        case "*":
          return args[0][2] * args[0][1];
        case "/":
          return Math.floor(args[0][2] / args[0][1]);
        default:
          throw new Error("Something's wrong with the inputs here");
    }
  
    return 0;
}

function zero(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 0]);    
  }
  return 0;
}
function one(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 1]);    
  }
  return 1;
}
function two(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 2]);    
  }
  return 2;
}
function three(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 3]);    
  }
  return 3;
}
function four(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 4]);    
  }
  return 4;
}
function five(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 5]);    
  }
  return 5;
}
function six(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 6]);    
  }
  return 6;
}
function seven(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 7]);    
  }
  return 7;
}
function eight(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 8]);    
  }
  return 8;
}
function nine(...args) {
  if (args[0]) {
    return handleOperation([...args[0], 9]);    
  }
  return 9;
}

function plus(...args) {
  return ["+", args[0]];
}
function minus(...args) {
    return ["-", args[0]];
}
function times(...args) {
      return ["*", args[0]];
}
function dividedBy(...args) {
      return ["/", args[0]];
}