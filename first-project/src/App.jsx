import React from 'react'
import HeroSectionComponent from './HeroSectionComponent'
import BlogSectionComponent from './BlogSectionComponent'
import ImageComponent from './Components/ImageComponent/ImageComponent'

import Navbar from './Navbar'
import { MaterialUIComponent } from './Components/MaterialUIComponent/MaterialUIComponent'

export const App = () => {
    return (
        <>
        <Navbar></Navbar>
            {/* <div>App</div>
            <h1 className='text-3xl font-bold underline'>Hello</h1> */}
            <HeroSectionComponent></HeroSectionComponent>
            <BlogSectionComponent></BlogSectionComponent>
            <MaterialUIComponent></MaterialUIComponent>
            <ImageComponent></ImageComponent>

        </>
    )
}






// export const App = ()=>{
//     return <div>
// App
//     </div>
// }

// export const Second = ()=>{
//     return <div>
// Second
//     </div>
// }

// export default App;