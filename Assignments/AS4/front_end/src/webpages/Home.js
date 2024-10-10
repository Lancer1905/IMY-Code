////Pieter Venter u23896257
import React from "react"
import { Link } from "react-router-dom";

export class Home extends React.Component {

    render(){
        return(
            <>
                <h1>Hello Home Page!</h1>
                <Link style={{margin:"10px"}} to='/'>Home</Link>
                <Link style={{ margin: "10px" }} to='/posts'>Posts</Link>            
            </>
        );
    }
}