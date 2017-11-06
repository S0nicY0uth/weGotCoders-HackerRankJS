//Details of the problem solved below can be found here...Recursion: Fibonacci Numbers -https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

function fibonacci(n) {

 if (n < 2){
     return n;
 } else {
     return fibonacci(n - 1) + fibonacci(n - 2);
  }

}
