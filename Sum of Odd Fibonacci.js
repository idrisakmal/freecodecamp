function sumFibs(num) {
  
  var a = 0, b = 1, sum = 1;
  
  var i, j = 2;
  
  var arrsum = [];
  
  var newsum = 0;
  
  // Initialized first array as 1
  arrsum[1] = 1;
  
  // Calculate fibonacci numbers up to num and store each in array
  for (i=2; i <= num; i++){
    sum = a + b;
    a = b;
    b = sum;
    arrsum[j] = sum;
    j++;
  }
  
  // Check for odd fibonacci in array and add to newsum
  for(i = 1; i <= arrsum.length; i++){
    if(arrsum[i] <= num){
      if(arrsum[i] % 2 > 0){
        newsum += arrsum[i];
      }
    }
  }
  
  return newsum;
}

sumFibs(1000);
