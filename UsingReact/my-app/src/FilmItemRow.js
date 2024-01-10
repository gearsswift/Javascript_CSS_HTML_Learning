import React from "react";

//Our component
class FilmItemRow extends React.Component{

  render(){
    return (
      <li>
        <a  href={this.props.url}>{this.props.url}</a>
      </li>
    )
    
  }
}

//exporting component to be used by other classes
export default FilmItemRow

