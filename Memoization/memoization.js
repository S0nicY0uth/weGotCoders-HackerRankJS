// details of the problem solved here can be found at https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem

function main() {

    var fibonacci = function(int){
        if (int < 0)return 0;
        else if(int < 1)return 1;
        else return fibonacci(int - 1) + fibonacci(int - 2) + fibonacci(int - 3);
    }

    function memo(fun){
      var cache = [];
      return function(n){
        var idx = n.toString();
        if(cache[idx] == undefined){
          cache[idx] = fun(n);
        }
        return cache[idx];
      };
    }

    fibonacci = memo(fibonacci);

    var s = parseInt(readLine());

    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        console.log(fibonacci(n));
     }
}
