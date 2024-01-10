//We need this any time we are creating a component
import React from "react";

//Here is our created component
//Note that we can access properties using the this.props.specifiedproperty e.g name
class Item extends React.Component{

  /*The constructor(props) is a special method called when an instance of the class is created. In React, it is used to initialize the object's state and bind event handlers. 
  The super(props) is necessary and calls the constructor of the parent class (usually React.Component), passing the props parameter. 
  It ensures that the component inherits properties and methods from its parent class before initializing its own properties.*/
  constructor(props)
  {
    super(props)
    //Intializing the state of our component
    this.state = {
        clicks: 0,
        totalRemaining: 100
    }
  }

  //Here we create a function within our Item component      
  clickMe() 
  {
    //Here we change our state when this method is called
    this.setState({
        clicks : this.state.clicks + 1,
        totalRemaining: this.state.totalRemaining - 1
    })

    console.log("I clicked: ",this.props.name ," Current State of how many clicks ",this.state.clicks);
  }  

  
  render(){
    return(
        <div>
            {/*Here we run our clickMe method when this h1 is clicked */}
            <h1 onClick={() => this.clickMe()}>Hello World <small>{this.props.name}</small></h1>
            <span>{this.state.clicks} is the number of clicks: {this.state.totalRemaining}</span>
        </div>
      
    )
  }
}

//We need to export so that it can be used in our external Js files
export default Item;