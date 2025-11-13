import React, { useRef, useState } from 'react'

 const UseRefHookComponent = () => {


    const emailRef = useRef();

    const [inp, setInp] = useState();


    console.log(inp)

    function getInputValues() {

        console.log(emailRef.current.value);
    }


    return (
        <>


            <p>{inp}</p>
            <div class="w-full md:w-1/2 px-3 m-4">


                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" ref={emailRef} onChange={(ev) => setInp(ev.target.value)} />

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={getInputValues}>Click</button>

            </div>

        </>
    )
}
export default UseRefHookComponent