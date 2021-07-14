import React from 'react'

export default function XO(props) {
    const {sign,setsign}=props;

    function change(){
            setsign(sign==='X'?'O':'X')
    }
    return (
        <div>
            <button onClick={change}>Change</button>
            <div>sign:{sign}</div>
        </div>
    )
  }
