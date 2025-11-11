import React, { useCallback, useState } from 'react'

export const UseCallbackHookComponent = () => {


    const [count, setCount] = useState(0);


   const incrementHandler = useCallback(()=>{
        setCount(count + 1);
    },[count])



  return (
    <>

    <p>{count}</p>
    
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={incrementHandler}>Increment</button>
    
    </>
  )
}
