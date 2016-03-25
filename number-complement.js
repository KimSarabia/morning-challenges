//INSTRUCTIONS: TAKE A DECIMAL AS AN ARGUMENT, CONVERT IT TO BINARY, FLIP IT AND RETURN A NEW DECIMAL
//Explanation: 50 in decimal form equals 110010 when converted to binary
//Inverting the bit sequence gives 001101
//This is the binary equivalent of decimal 13

//Sample Input #2: 100
//Sample Output #01: 27

function getIntegerComplement(n){
    var res = parseInt(n.toString(2).replace(/[01]/g,function(n) {return 1-n;}),2);
    return res;
}
