import React, { useState } from 'react'

export const UseStateHookComponent = () => {

    // let a = 23;

    let [a, setA] = useState(10);
    

    // function increment() {
    //     console.log(a);

    //     setA(a + 1);
    // }


    return (
        <>

            <p>{a}</p>

            <button onClick={()=>setA(a+1)}>Increment</button>

        </>





    )
}
