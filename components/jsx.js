import React from 'react'

export default function Jsx() {
    let x=3;
    
    return (
        <div>
           <h4 style={{backgroundColor:"red"}}>HELLO EVERYBODY</h4>
           <input type="text" name="name"  placeholder="Enter your name"></input>
           <button className="save">save</button><br></br>
           
           <label>{x>2?'yes':'no'}</label>
        </div>
    )
}

    // <h1 style={{ backgroundColor: 'red' }}>HelloEverybody</h1>
    // <input type='Text'  ></input>
    // <button className="">save</button>       {/* //1 תגית מתחילות באותיות קטנות */}
    // {/* <h1>hello</h1> */}
    // {/* //2 תגיות באותיות גדולות הן קומפוממטה */}
    // {/* <Person></Person> */}
    // {/* //3 react ל import חובה להוסיף    */}
    // {/* //4  חייב להיות עטוף באלמנט אחד  jsx קוד*/}
    // {/* <> */}
    // {/* <h1>atra</h1>
    // <h2>react</h2> */}
    // {/* </> */}
    // {/* <div>
    //     <h1>atra</h1>
    //     <h2>react</h2>
    // </div> */}
    // {/* //5 JS אין שימוש במילים שמורות של  */}
    // {/* function tryy(){
    //     try{
    // }
    // catch{
    // }
 
    // {/* camelCase הופכים להיות attributes  */}
    // {/* <p class="p"></p >=> */}
    // {/* <p className="p"></p> */}
    // {/* //camelCase הופכים ל style */}
    // {/* <p style={{ fontSize: "11px" }}>hello</p> */}
    // {/* //camelCase  הופכים ל event */}
    // {/* <button onClick="doSomething"></button> */}
    // {/* //6חייב להיות בתוך js קוד  {} */}
    // {<p> x+y={x + y}</p>}
    // {<p>x+y={addNumbers()}</p>}
    // {x > 2 && x < 10 ? 'yes' : <p>no</p>}
    // {/* <div className={name}>className={name}</div> */}
    // {/* <ul>
    //     {
    //         arry.map(item => <li key={item}>{item}</li>)
    //     }
    // </ul> 
    // }
