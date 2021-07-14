import React from 'react'

export default function Time(props) {
    const {time,settime}=props;
    function change(num){
        settime(num)
    }
    return (
        <div>
           <input type="number" value={time} onChange={(e)=>change(e.target.value)} placeholder="enter time"></input>
        </div>
    )
}
