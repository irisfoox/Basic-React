import React from 'react'
import { useState } from 'react';

export default function Person(props) {
    const {name,age}=props;
    const [ifShow,setIfShow]=useState(true);

    const hide=()=>{
         setIfShow(!ifShow);
    }
    return (
        <div>
            <button onClick={hide}>hide or display</button>
            {ifShow? <div>
            <h3>my name is : {name}</h3>
            <h3>my age is : {age}</h3>
            </div>:
            null}
        </div>
    )
}
Person.defaultProps={   //defaultive value so wont error if didnt dend props
    name:'sara',
    age: 40
}