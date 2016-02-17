function drop(arr, func) {
  
  var times = arr.length;
  var i=0;
  
  for(i = 0; i < times; i++){
    
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  
  return arr;
}

drop([1,2,3,7,4], function(n) {return n > 3; });
