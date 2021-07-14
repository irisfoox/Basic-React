import React from 'react'
import Guess from './Guess';
//import { useState } from 'react';

export default function WrapGuess(props) {
    const num=Math.floor(Math.random()*100);
    return (
        <div>
            <Guess num={num}/>
            <Guess num={num}/>
        </div>
    )
}
