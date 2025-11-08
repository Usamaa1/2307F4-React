import React, { useRef, useState } from 'react'

export const UseRefHookComponent = () => {


    const emailRef = useRef();

    const [inp, setInp] = useState();


    console.log(inp)

    function getInputValues() {

        console.log(emailRef.current.value);
    }


    return (
        <>


            <p>{inp}</p>

            <input type="text" ref={emailRef} onChange={(ev) => setInp(ev.target.value)} />

            <button onClick={getInputValues}>Click</button>


        </>
    )
}
