//Pieter Venter u23896257
import React from "react";
import { Post } from "../components/post";
import { Link } from "react-router-dom";

export class Posts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postsArr : [
                {
                    title: "Growing Your First Vegetable Garden",
                    author: "Emma Stone",
                    description:
                        "A beginner's guide to planting and harvesting your own vegetables.",
                },
                {
                    title: "Indoor Plant Care Tips",
                    author: "James Miller",
                    description: "How to keep your indoor plants thriving with minimal effort.",
                },
                {
                    title: "Composting for Beginners",
                    author: "Sarah Brown",
                    description: "Learn how to create nutrient-rich compost for your garden.",
                },
                {
                    title: "Creating a Pollinator-Friendly Garden",
                    author: "Michael Green",
                    description:
                        "Tips on attracting bees, butterflies, and other pollinators to your garden.",
                },
                {
                    title: "Seasonal Flower Gardening",
                    author: "Linda Johnson",
                    description:
                        "A guide to planting flowers that bloom beautifully throughout the year.",
                },
            ]
        };
    }

    render(){
        return(
            <>
                <h1>Posts Page:</h1>

                <Link style={{ margin: "10px" }} to='/'>Home</Link>
                <Link style={{ margin: "10px" }} to='/posts'>Posts</Link>

                <div>
                    {this.state.postsArr.map((post,key) => {
                        return (<Post key={key} title={post.title} author={post.author} description={post.description}></Post>);
                    })}
                </div>
            </>
        );
    }
}