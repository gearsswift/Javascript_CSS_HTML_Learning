
//Print to the console
console.log("Page successfully loaded script.js");

//Using variables
var website = "https://codingforeveryone.com";
var teacherName = "Kalob Taulien";
console.log(teacherName);

/*using let and const to create variables instead
of var. This is because let and const can be scoped
A const cannot be changed once it is declared*/
const height = "6'0";
let name = "Joshua Weekes"; 

/*Operators - These are ways that you can work with variables
Example: ==,=,+,-,*,/,%,++,-- etc*/

/*Collections
These are like arrays that can contain literaly anything*/
const list = ["Item 1",2,"Three",3.14,[]];

/*Variables that contain functions*/
const getAge = function() {return 31;}

/*Object
These objects contain key value pairs*/
const obj = {
    /*Key:value*/
    'name': 'value',
    'profession':'Coding teacher'
}//can be accessed with obj[key]

/*CONDITIONAL STATEMENTS*/
if(height == "6'0") // - condition
{
    //code that runs if condition is true
    console.log("You are tall");
}
else{
    //code that runs if condition is false
    console.log("You are pretty short");
}

/*Selecting html element from their ID*/
const box = document.getElementById("box");
//Change the content inside an html element we selected
box.innerHTML = "Black Boy";

/* USING OBJECTS IN JAVASCRIPT*/
const person={
    'name' : 'Joshua',
    'Job' : 'Factory Worker'
};
const person1 = 
{
    'name' : 'Kevin',
    'Job' : 'Actor',
    'age' : 31,
    'liked_foods' : ['Pizza','Pie','Apple']
};

console.log(person['name'] + " " + person['Job']);
console.log(person1['name'] + " " + person1.Job);

/*Working with strings*/
const course = "Javascript: Learn Javascript";
/*Gives the index of where the string we specified 
starts at, so in this example we will get
back the index 12 */
const index = course.search("Learn");
console.log(course[index]);//Displays the letter L
/*Here we can slice out a portion of string from our original
string*/
console.log(course.slice(12,17));//Display Learn
/*string.substr propery works like the string.slice
propery but instead of specifying the 2 indexes 
the string.substr(a,b) takes in the index of the first
character: a that we want then b specifies how many indexes
we want to take after that */
console.log(course.substr(12,5));//Displays Learn
console.log(course.length);//Gives us the length of the string
/*Look up different Javascript string functions online*/

/*The typeof method is used to figure out the type
of a variable we create*/
let j = 5;
console.log(typeof(j));//This will return a number

/*Casting Data Types*/
let age = "31";
age = Number(age); //Here we cast the string to a number
//Note we can cast variables as Array,String,Number,Object and Boolean


/*STRING CONCATENATION*/
let str = `My age is ${age}`;
console.log(str);

/*JAVASCRIPT ARRAYS*/
let lst = ["Item 1",2,"Three",3.14,[]];
lst.push("Joshua")//Adds a new item to our array
const newItem = lst.pop(); // This will give us the last element
//we pushed onto our array while also removing that element 
//from the array

//Iterating over our Array using for loop
for(let i = 0 ; i < lst.length; i++){
    console.log(lst[i]);//Log each element in our lst
}
//Iterating over our loop using a foreach loop
lst.forEach(element =>{
    console.log(element);
})

//Selecting elements by classes

/*Here we select the first element in our HTML doc
with the class this-class*/
const elem = document.querySelector(".this-class");
console.log(elem.innerText);

/*Here we select all the elements in our HTML doc 
with the class this-class*/
const elems = document.querySelectorAll(".this-class");
//Print out all the innerHTML of all the elements we just selected
elems.forEach(e=>{
    console.log(e.innerHTML);
});

//Selecting our html list 
const elemslist = document.querySelectorAll("li");
elemslist.forEach(node=>{
    console.log(node.innerText);
});
//Adding a class in an html element
/*Here we give the first element in our list a
class name of first-list-item*/
elemslist[0].classList.add("first-list-item");

/*FUNCTIONS IN JAVASCRIPT*/
const num = 31;
const num2 = 34;
console.log(AddNums(num,num2));//Use function

//Implement function
function AddNums(x,y){
    return x+y;
}

//Accepting and unlimited number of paramaters
function addNumbers(...numbers){
    let total = 0;
    numbers.forEach(t => {
        total += t;
    });
    return total;
}
//Run function
console.log(addNumbers(3,2,4,5,1,4,3,5,5));

//Objects with functions
const character = {
    name: "Joshua",
    age: 33,
    height: "6'2",
    speak: function(black){
        console.log(`Hello I love you ${black}`);
    },
    talk(){
        console.log("Showing i can talk");
    }
}
//Adding more to an object
character.speak("Man");

