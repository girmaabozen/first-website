// #!/usr/bin/env node
'use strict';
/**
 * IN CLASS EXERCISE: LOOPS
 */
/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  // givin an input arrat loop forward over the array and print its values
  for (var i = 0; i < array.length; i++ ){
console.log(array[i])
  }
}
/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //givin an input array
  //loop backwards over the array abd print its values using console.log
  for (var i = array.length - 1; i >= 0; i--){
      console.log(array[i]) 
  }
}
/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //givin an input object return an array containing the object keys
  return Object.keys(object);
  
  
}
/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //givin an input object loop over the object and print its keys using console.log
  
  for (var key in object){
    console.log(key);
  }
}
/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  // givin an input object return an array containg the objects values 
  return Object.values(object);
}
/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //loop over the object and print its values using the console.log
  for (var key in object){
    console.log(object[key]);
  }
}
/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //givin an input object return the length of its key/value pairs
  var arr = [];
  for (var key in object){
    arr.push(object[key]);
  }
  return arr.length;
}
/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // YOUR CODE ABOVE HERE //
  //givin an input object loop over the object in reverse 
  //print its values using console.log
  var arr = [];
  for (var key in object){
    arr.push(object[key]);
  }
  for (var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
    
  
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}