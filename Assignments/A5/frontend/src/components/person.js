//Pieter Venter u23896257
import React from "react";

export class Person extends React.Component {

    constructor(props){
        super(props);


    }

    render() {
        return (
            <>
                <h1>Person</h1>
                <h2>{this.props.person.name}</h2>
                <p>Birth Year: {this.props.person.birth_year}</p>
                <p>Eye Color: {this.props.person.eye_color}</p>
                <p>Gender: {this.props.person.gender}</p>
                <p>Homeworld: {this.props.person.homeworld}</p>
            </>
        );
    }
}
