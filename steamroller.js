function steamroller(arr) {
  var shouldCont = arr.some(function(elem) {
    return Array.isArray(elem);
  });
  
  if (shouldCont) {
    arr = arr.reduce(function(prev, cur) {
      return prev.concat(cur);
    }, []);
    return steamroller(arr);
  } else {
    return arr;
  }
}

steamroller([[["a"]], [["b"]]]);
