import React, { useMemo, useState } from 'react'

 const UseMemoHookComponent = () => {
    const [number, setNumber] = useState(10);


    const expensiveResult = useMemo(() => {

        console.log('Performing expensive calculation...');
        // Simulate an expensive calculation
        let result = 0;
        for (let i = 0; i < number * 1000000; i++) {
            result += i;
        }
        return result;

    }, [number])


    return (
        <>

            <div>
                <p>Result: {expensiveResult}</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setNumber(number + 1)}>Increment Number</button>
            </div>


        </>
    )
}
export default UseMemoHookComponent;