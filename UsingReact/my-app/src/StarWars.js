import React from "react";
//import FilmItemRow from "./FilmItemRow";


//Creating Component
class StarWars extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            films: []
        }
    }

    getNewCharacter()
    {
        console.log("new Character")
        //Getting random number
        const randomNumber = Math.round(Math.random() * 82)

        /*Creating API request*/
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(url)
            this.setState({
            loadedCharacter: true,
            name: data["name"],
            height: data["height"],
            homeworld: data["homeworld"],
            image: data["image"]
           // films: data["films"]
        })})

        
    }

    render(){
        //Creating our new component to have our films
        // const movies = this.state.films.map((url,i) => {
        //     /*Here is where we return a FilmItemRow Component with our attached url and i for
        //     each of our films*/
        //     return  <FilmItemRow url={url} key={i}></FilmItemRow>
        // })

        return(
            <div>
                {/*Using if statements*/}
                {
                    /*Here we state that if the
                    loadedCharacter state is true we want
                    to show the html snippet below*/
                    this.state.loadedCharacter &&
                        <div>
                            <h1>{this.state.name}</h1>
                            <p>{this.state.height} cm</p>
                            <p><a href={this.state.homeworld}>Homeworld</a></p>
                            <div className="imageholder">
                                <img alt="Character" src={this.state.image}></img>
                            </div>
                        </div>
                }
                
                <button onClick={()=>this.getNewCharacter()} type="button" className="btn">Randomize Character</button>
            </div>
        )
    }
}

//exporting component
export default StarWars

