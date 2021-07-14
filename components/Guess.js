import React,{useState} from 'react'

export default function Guess(props) {
    const [message, setmessage] = useState('');
    const {num}=props;

    function check(selected){
      
      if(num<selected){
         setmessage("too big");
      }
      else if(num>selected){
          setmessage("too small")
      }
      else{
          setmessage("You win")
      }
    }
    return (
        <div>
            <input type="number" onChange={(e)=>check(e.target.value)} placeholder="Guess the number"></input>
            <button onClick={check}>Check</button>
            <label>your guess: {message}</label>
        </div>
    )
}
