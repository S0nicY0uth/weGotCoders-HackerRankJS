process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine();
    var b = readLine();

   var arraya = a.split('');
   var arrayb = b.split('');

   var arraylengths = arraya.length + arrayb.length;

    //console.log(arraylengths);

    if (arraya.length <= arrayb.length){
        var shortestarray = arraya;
       var longestarray = arrayb;
    } else{
        var shortestarray = arrayb;
        var longestarray = arraya;
    }

    var subtract = 0;

    for (var x = 0; x < shortestarray.length; x++) {
    var theletter = shortestarray[x];
    var thenumber = longestarray.indexOf(theletter, 0);   // <-- check only once
    if (thenumber > -1) {
        var index = thenumber;
        delete longestarray[index]; // <-- less costlier than splice
        subtract = subtract + 2;
    }
}


  var total =  arraylengths - subtract;

  console.log(total);


}
