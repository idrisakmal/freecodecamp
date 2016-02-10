// This is sum of all prime

function sumPrimes(num) {
 
  var primes = 0;
  
  // Loop each i to num to check if i is prime
  for(var i = 0; i <= num; i++){
    if(checkPrime(i)) {
      primes += i;
    }
  }
  
  // The function that checks the prime numbers and return true if prime
  function checkPrime(max) {
    if(max < 2) return false;
    for (var i = 2; i < max; i++) {
        if(max % i === 0)
            return false;
    }
    return true;
  }
  return primes;
}

sumPrimes(100);