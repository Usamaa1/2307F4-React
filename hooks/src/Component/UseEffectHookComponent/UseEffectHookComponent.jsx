import React, { useEffect, useState } from 'react'
import axios from 'axios';

 const UseEffectHookComponent = () => {


    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [posts, setPosts] = useState([]);

    const incrementHandler = () => setCount1(count1 + 1);
    const decrementHandler = () => setCount1(count1 - 1);

    async function getPosts(id) {
        try {
            isloading = true;
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

          if(response){
            isloading=false
          }
            console.log(response.data);
            setPosts(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        console.log(count1);

        getPosts(count1);

    }, [count1])

    // useEffect(() => {

    //     console.log(count1);

    //     getPosts();

    // }, [count1])

    // useEffect(()=>{

    //     console.log(count1);

    // },[])


    return (
        <>
            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>

            {isloading ? (<p>Loading...</p> ) :   (<p>Id: {posts.id} title: {posts.title}</p>)}

            {/* {posts.map((post)=> ( */}
                    (<p>Id: {posts.id} title: {posts.title}</p>)
                {/* ) */}
            {/* )} */}
            


            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={decrementHandler}>Decrement Number</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={incrementHandler}>Increment Number</button>

        </>
    )


}
export default UseEffectHookComponent;