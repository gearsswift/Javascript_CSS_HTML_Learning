//**Strict mode allows us to make our javascript code less error prone */
"use strict";

/**This will be called 
 * only when the entire html page elements
 * is loaded
 */
window.onload = function(){
    /**Ideally we will run all of our 
     * javascipt code inside of here
     */
    alert("Page loaded");
}

//Called directly before our page is loaded
window.onbeforeunload = function(){
    /**Here is where we will want to write some
     * code you want to run just before a page 
     * is unloaded
     */
}

//STRICT COMPARISON - Compares the type as well as the value
let x = 100;
let y = "100";
if(x == y){
    console.log("Equal Losely");
}

if(x === y) //This is a strict comparison
{
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

//Callback function

//This will call the function inside of it after 2.5 seconds
setTimeout(function() {
    console.log("Do something");
},2500);

//This will execute our callback function every 2 seconds
let count = 0;
const interval = setInterval(function(){
    console.log("execute every 2 seconds");
    count++;
    //This means that after our third run of this interval we will clear it
    if(count === 3){
        clearInterval(interval);
        console.log("This was our last interval");
    }
},2000);

//While loops
let num = 0;
while(num <  100){
    console.log(num);
    num++;
}

//Date formats- when working with dates there are local to your computer time
let d = new Date(2025,1,15);
//Explore the othe different functions with Date objects
console.log(d.getDate());

//Deleting object properties
const person4 = {
    name: 'Joshua',
    age: 31
}
//Delets the age property
delete person4.age;

//Using Math in javascript
let numb = 3.4;
let rounded = Math.round(numb);
//Generating random numbers
let rnd = Math.random(); //Gets a random number between 0 and 1
let rnd1 = Math.random() * 100;//Will give us a number between 0 and 100 

//Guessing number gain
while(true)
{
    let guess = prompt("Guess number: ");
    guess = Number(guess);

    const rndNum = Math.ceil(Math.random() 
    * 10);

    if(guess === rndNum){
        alert("You Win");
        break;
    }else{
        console.log("You guessed", guess,
        "But the right number was", rnd);
    }


}

//Exception handling
try{
    //Trys to run code
}catch(error)
{
    //Runs the code in here if an error happened in try
}
finally//this is not needed
{
    //This will run regardless of what happens
}

//Arrow function, keep in mind that you can use parameters
const hello = ()=>{
    console.log("Hoyahh");
}
hello();

//Class constuctors
class NewPerson{
    constructor(name)
    {
        this.name = name;
    }

    greeting(){
        console.log(`Hello from ${this.name}`);
    }
}

//Creating an object from class
let psn = new NewPerson(Joshua);
psn.greeting();//Calling function from object

//Ajax Asychronous Javascript and XML
//Used for XMLHttpRequest

/*fetch(website) - Here we fetch the api
    .then(response => response.json()) - Then we convert it to json
    .then(data => {
        console.log(data)}) -Then we do something with this data*/