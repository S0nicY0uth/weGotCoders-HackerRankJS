//details about the problem solved here can be found at - https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    var ml = magazine.length;
    var nl = ransom.length;

    var magazineobject ={};
    var ransomnoteobject = {};

    for(x=0;x < ml; x++){
        var word = magazine[x];
        if (magazineobject[word] === undefined){
            magazineobject[word] = 1;
        } else {
            magazineobject[word] = magazineobject[word] + 1;
        }
    }
    var uniquewords = [];
    for(i=0;i < nl; i++){
        var word = ransom[i];
        if (ransomnoteobject[word] === undefined){
            ransomnoteobject[word] = 1;
            uniquewords.push(word);
        } else {
            ransomnoteobject[word] = ransomnoteobject[word] + 1;
        }
    }
    var counter = 0;
    var result = "Yes";
    if (n > m){
        result = "No";
    }  else {
        for (y=0;y<uniquewords.length;y++){
            var word = uniquewords[y];
            var amountinmag = magazineobject[word];
            var amountinnote = ransomnoteobject[word];
            if(amountinnote > amountinmag){
                result = "No";
                break;
            }
        }
    }
    console.log(result);
}
