//Pieter Venter u23896257
import React from "react"
import { EditPost } from "./editPost";

export class Post extends React.Component {

    constructor(props){
        super(props);

        this.editPost = this.editPost.bind(this);
        this.updatePost = this.updatePost.bind(this);

        this.state = {
            edit: false,
            title: this.props.title,
            author: this.props.author,
            description: this.props.description
        };
    }

    editPost(){
        this.setState({edit: !this.state.edit});
    }

    updatePost(title, description){
        this.setState({
            edit: !this.state.edit, 
            title: title,
            description: description
        });    
    }

    render(){
        return(
        <>
            {!this.state.edit ? (
            <div style={{borderTop: "2px solid black", borderBottom: "2px solid black", margin: "5px", padding: "5px"}}>
                <h2>{this.state.title}</h2>
                <p style={{ borderBottom: '1px solid gray' }}>{this.state.author}</p>
                <p>{this.state.description}</p>
                <button onClick={this.editPost}>Edit Post</button>
            </div>)
            : (
                <EditPost title={this.state.title} description={this.state.description} onSave={this.updatePost}></EditPost>
            )}
        </>
        );
    }
}