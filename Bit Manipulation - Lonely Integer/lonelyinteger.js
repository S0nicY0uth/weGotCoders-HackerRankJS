//Details of the problem solved here can be found at...https://www.hackerrank.com/challenges/ctci-lonely-integer/problem

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);


    var obj = {}
    var count = n - 1;

    for (i=0; i <= count; i++){
        var number = a[i];

        if (obj[number] == undefined){
            obj[number] = 1;

        }else{
            obj[number] = obj[number] +1;
        }
    }



    var fieldval;
    for (var fieldname in obj){

        fieldval = obj[fieldname];

        if (fieldval == 1){
            console.log(fieldname);
        }

    }


}
