"use strict";
const button = document.querySelector("button");
const var_name = document.getElementById("name");
const height = document.getElementById("height");
const eye_color = document.getElementById("eye_color");


//Adding an event listener for when out button is clicked
button.addEventListener('click',clickButton);


//This is the function that will be attached to our eventListener
function clickButton(e){
     var_name.innerHTML = '<em>Loading...</em>';
        height.innerHTML = '<em>Loading...</em>';
        eye_color.innerHTML = '<em>Loading...</em>';
    let rndNum = Math.ceil(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${rndNum}/`)
    .then(response => response.json())
    .then(character => {
        console.log(rndNum);
        var_name.innerHTML = character.name;
        height.innerHTML = character.height;
        eye_color.innerHTML = character.eye_color;
       console.log(character);
    });

  
}