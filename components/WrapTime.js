import React ,{useState} from 'react'
import Time from './Time'

export default function WrapTime() {
    const [time, settime] = useState();
    // let arr=React.Children.toArray;

    // function handelHours(){
    //     for(let i=0;i<React.Children.count;i++){
    //         if(arr[i]){
    //            arr[0].settime(time);
    //            arr[1].settime(time*60);
    //            arr[2].settime(time*60*60);
    //         }
    //     }  
    // }
    // function handelMin(){
    //     for(let i=0;i<React.Children.count;i++){
    //         if(arr[i]){
    //            arr[0].settime(time/60);
    //            arr[1].settime(time);
    //            arr[2].settime(time*60);
    //         }
    //     }
    // }
    // function handelSec(){
    //     for(let i=0;i<React.Children.count;i++){
    //         if(arr[i]){
    //            arr[0].settime(time/60/60);
    //            arr[1].settime(time/60);
    //            arr[2].settime(time);
    //         }
    //     }
    // }
    return (
        <div>
            Time in hours: <Time time={time} settime={settime}/>
            Time in minutes: <Time time={time*60} settime={settime}/>
            Time in seconds: <Time time={time*60*60} settime={settime}/>
        </div>
    )
}
