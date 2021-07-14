import React from 'react'
import XO from './XO'
import { useState } from 'react';

export default function WrapXO(props) {
    const [sign, setsign] = useState('X');

    return (
        <div>
            <XO sign={sign} setsign={setsign}/>
        </div>
    )
}
