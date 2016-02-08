\\ Sorted Union

function unite(arr1, arr2, arr3) {
  
  var lookupTable = {};
  
  var flattened = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments));
  
  return flattened.reduce(function(acc, cur, index) {
     if (lookupTable[cur] === undefined) {
       lookupTable[cur] = cur;
       acc.push(cur);
       return acc;
     } else {
       return acc;
     }
  }, []);
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
