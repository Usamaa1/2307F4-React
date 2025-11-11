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

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>setA(a+1)}>Increment</button>

        </>





    )
}
