//jshint esversion: 6

function add() {
  var args = Array.from(arguments);
  
  var checkNum = function(num) {
    if (typeof num !== 'number')
      return true;
    else
      return false;
  };
  
  if (args.some(checkNum)) {
    return;
  } else if (arguments.length > 1) {
    return args.reduce((acc, n) => acc += n, 0);
  } else {
    return (n) => typeof n === "number" ? n + arguments[0] : undefined;
  }
}


console.log(add(2, "3"));
