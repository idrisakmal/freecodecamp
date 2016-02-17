function smallestCommons(arr) {
  var min, max, multiple;

  if(arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[1];
  }

  function range(min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a, b) {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  multiple = min;

  range(min, max).forEach(function(n) {
    multiple = lcm(n, multiple);
  });

  return multiple;
}

smallestCommons([1, 5]);