exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  
  var start = 2;

  while (n !== 1) {

    if (n % start === 0) {
      primeNumber = start;
      n /= start;
    }
    else{
      start++;
    }

  }

        return primeNumber;

};