//Arrays Left Rotation - The problem solved here can be found at - https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    for (var i = 0; i < k; i++) {
       var number = a.shift();
       a.push(number);
    }
    var output = a.join(" ");
    console.log(output);

}
