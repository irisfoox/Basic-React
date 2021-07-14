import React, { Component } from 'react'

export default class PersonClass extends Component {
    constructor(props){
       super(props);
       this.state={
           style:{color:"green"},
           name:'tamar',
       }

    }
    render() {
        const {name}=this.props;

        return (
            <>
            <div style={this.state.style}>
                {this.props.name},{name}
            </div>
            </>
        )
    }
}
