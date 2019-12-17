/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john
/* on line #25 the var my name was assigned a value. At this point (once the
variable is assinged a value it is no longer a declaration variable) its
considered to be an assigned variable*/


// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



/* Variables continued: Var, Let, Const
Var: ---- var declarions are gloably scoped or function/locally scoped.
Var variables can be updated and redeclared within its scope.

let: ---- this is the prefered method used to declare variables. Let is blocked scoped.
let variables can be updated but not re-declared. variabes declared with "let"
in a code block are ONLY abvaible within that code block



const: ---- const is blocked scoped. const can be neither updated nor re-declared.
think of const as "constantly" staying the same.
every const declartion must be iniialized at the time of the declarion EXCEPT when
it comes to objects!!


__________ BELOW I HAVE CREATED AN EXAMPLE OF 3 DIFFERENT VARIABLES.
var
let
const
*/ 
var allAboutFood;
function yummyFood(food){
 var favoriteFood = "fries";
favoriteFood = "curlyFries";
   console.log(favoriteFood);
}
//the function aboove will print curlyFries to the console
//----------------------------------------------
let bye = "see ya";
if (5 === 5){
    let hello = "hola";
    console.log(hello);
}
let hello = "hi"

// the let variable will print hola to the console because it is scoped based 
//---------------------------------------------------

const basketball = "fun"
function sports (){
    const basketball = "awesome";
    console.log(basketball);
}
sports(); 

// the const variable will print awesome to the console due to the variable
//const being gloably scoped 
//------------------------------------------

/*--------------HOISTING 
think of hoisting as raising!!
var and let declartions are hoisted to the TOP!!!!
variables and constants declared with "let" or "const" are not hoisted 
*/
