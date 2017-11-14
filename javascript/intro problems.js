//JS Intro Problems

//madLib
const madLib = (verb, adjective, noun) => {
  return(`We shall ${verbtoUpperCase()} the ${adjectivetoUpperCase()} ${noun.toUpperCase()}`)
}

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString) )
  return(searchString.includes(subString));
}
console.log('isSubstring')
isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");

function fizzBuzz(arr){
  new_arr = [];
  arr.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0){
      continue;
    }
    if (num % 3 === 0 || num % 5 === 0) {
      new_arr.push(num);
    }
  })
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(false)
      return false
    }
  }
  console.log(true)
  return true
}
console.log(`IS PRIME RESULTS`)
isPrime(2)
isPrime(10)
isPrime(15485863)
isPrime(3548563)

function firstNPrimes(n){
  const primes = []
  let count = 0;
  let i = 0
  while(count < n){
    if(isPrime(i)){
      primes.push(i);
      count++;
    }
    i++
  }
  return primes;
}

function sumOfNPrimes(n){
  if(n === 0) {
    console.log(`0`);
    return 0;
  }
  const primes = firstNPrimes(n);

  console.log(
    primes.reduce((t,v) => t + v)
  )
  return primes.reduce( (t,v) => t + v);
}
console.log(`SUM OF PRIMES`)
sumOfNPrimes(0)
sumOfNPrimes(1)
sumOfNPrimes(4)
