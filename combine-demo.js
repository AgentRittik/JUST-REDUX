



function removeSpaces(str){
    return str.split(" ").join("");
}

function repeatString(str){
    return str.repeat(2);
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeItaclics(str){
    return str.italics();
}
let str = "hello there how are you ?";

console.log(makeItaclics(makeUpperCase(repeatString(removeSpaces(str)))));

// other way using reducer

let fnc = [str , removeSpaces , repeatString ,makeUpperCase , makeItaclics];

const result  = fnc.reduce((prevAns , currFnc)=>{
    console.log(prevAns ,currFnc);
    return currFnc(prevAns);
});

console.log(result);