function find(arr, func) {
  num = arr.filter(func);
  return num[0];
}

find([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
