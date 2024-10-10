//Pieter Venter u23896257
import React from "react";

export class Search extends React.Component {

    constructor(props){
        super(props);

        this.searchVal = React.createRef();

        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick() {
        if (this.searchVal.current.value !== ""){
            this.props.onSearch(this.searchVal.current.value);
        } else {
            alert("Search Field is empty");
        }
    }

    prevClick() {
        this.props.onPrev();
    }

    nextClick() {
        this.props.onNext();
    }

    render() {
        return (
            <div className="search-div">
                <h2>Search</h2>
                <input type="text" ref={this.searchVal}></input>
                <button onClick={this.handleSearchClick}>Search</button>
                <div>
                    <button onClick={this.prevClick}>Pevious</button>
                    <label> Current ID: {this.props.id}</label>
                    <button onClick={this.nextClick}>Next</button>
                </div>
            </div>
        );
    }
}