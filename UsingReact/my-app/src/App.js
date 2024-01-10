/*Here we import ou react module which we will need to create
components*/
import React from 'react';
import './App.css';
//Importing our starwars component
import StarWars from './StarWars.js';

//IMPORTANT - In the index.js is where our app is actually rendered

//Here we create our component directly in our App.js
/*Another method can be to create our component in its own 
file then import*/
// class Item extends React.Component{
//   render(){
//     return(
//       <h1>Hello World <small>This is a Test</small></h1>
//     )
//   }
// }





function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/*Here is where we utilize our Item component
          we just creeated, we are also passing in a property
          named name */}
          {/* <Item name="Gully"></Item>
          <Item name="Josh"></Item>
          <Item name="Stink"></Item> */}
          {/* Using the starwars component */}
          <StarWars></StarWars>
       
      </header>
    </div>
  );
}

export default App;
