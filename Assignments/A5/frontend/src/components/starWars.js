//Pieter Venter u23896257
import React from "react";
import api from "../../../api";
import { Search } from "./search";
import { Person } from "./person";

export class StarWars extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.nextChar = this.nextChar.bind(this);
        this.prevChar = this.prevChar.bind(this);

        this.state = {
            charId: 1,
            charName: "",
            bSearch: false,
            personData: null, 
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        const personData = await api.getCharacterById(this.state.charId);
        this.setState({personData});
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.charId !== this.state.charId || prevState.charName !== this.state.charName || prevState.bSearch !== this.state.bSearch) {

            this.setState({ isLoading: true, error: null });

            try {
                let personData;
                if (this.state.bSearch) {
                    personData = await api.getCharacterByName(this.state.charName);
                } else {
                    personData = await api.getCharacterById(this.state.charId);
                }
                this.setState({ personData });
            } catch (error) {
                this.setState({ error: 'Failed to fetch data' });
            } finally {
                this.setState({ isLoading: false });
            }
        }
    }

    handleSearch(name) {
        this.setState({ charName: name, bSearch: true });
    }

    nextChar() {
        this.setState((prevState) => ({
            charId: prevState.charId + 1,
            bSearch: false
        }));
    }

    prevChar() {
        if (this.state.charId > 1) {
            this.setState((prevState) => ({
                charId: prevState.charId - 1,
                bSearch: false
            }));
        } else {
            alert("Character min reached");
        }
    }

    render() {
        const { personData, isLoading, error } = this.state;

        return (
            <>
                <Search id={this.state.charId} onNext={this.nextChar} onPrev={this.prevChar} onSearch={this.handleSearch} />
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {personData && <Person person={personData} />}
            </>
        );
    }
}
