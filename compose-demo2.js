/**
 *                          [   COMPOSE REDUX FUNCTION]
 */

  
import { compose } from "redux";

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
let composeFunction = compose(removeSpaces , repeatString ,makeUpperCase ,makeItaclics);

console.log(composeFunction(str));