//Pieter Venter u23896257
import React from "react"

export class EditPost extends React.Component {

    constructor(props){
        super(props);

        this.refTitle = React.createRef();
        this.refDesc = React.createRef();

        this.savePost = this.savePost.bind(this);
    }

    savePost(e){
        e.preventDefault();

        this.props.onSave(this.refTitle.current.value,this.refDesc.current.value);
    }

    render(){
        return(
            <>
                <form onSubmit={this.savePost} style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}>
                    <div style={{ margin: "5px" }}>
                        <div style={{ display: 'inline', alignContent:"space-between"}}>
                            <label style={{ marginRight: '65px' }}>Post Title:</label>
                            <input
                                style={{ width: '500px' }} 
                                name="title" 
                                type="text" 
                                ref={this.refTitle} 
                                defaultValue={this.props.title}>
                            </input>
                        </div>
                    </div>
                    <div style={{ margin: "5px" }}>
                        <div style={{ display: 'inline', alignContent: "space-between" }}>
                            <label style={{ marginRight: '20px' }}>Post Description:</label>
                            <input 
                                style={{width:'500px'}}
                                name="description"  
                                ref={this.refDesc} 
                                defaultValue={this.props.description}>
                            </input>
                        </div>
                    </div>
                    <button style={{ margin: "5px" }} type="submit">Save</button>
                </form>
            </>
        );
    }
}