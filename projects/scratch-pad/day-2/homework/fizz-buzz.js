// #!/usr/bin/env node
'use strict';
/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print "Fizz" instead of the number.
 *  c. AND for the multiples of five print "Buzz".
 *  d. FINALLY, for numbers which are multiples of both three and five print "FizzBuzz".
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // write a function called fizzbuzz tht prints the num 1 - 100
    // but for multiples of 3 print "Fizz" instead of the number
    //for multiles of 5 pront "Buzz"
    // for number that are multiples of 3 AND 5 "FizzBuzz"
    // YOUR CODE GOES ABOVE HERE // print ""
    for (var i = 1; i <= 100; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
       else if (i % 5 === 0){
            console.log("Buzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}