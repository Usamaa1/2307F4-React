import { useState } from 'react'
import { CardComponent } from './Components/CardComponent/CardComponent'

import img1 from './assets/images/1.jpg'

import img2 from './assets/images/2.jpg'
import img3 from './assets/images/3.jpg'
import img4 from './assets/images/4.jpg'
import img5 from './assets/images/5.jpg'
import img6 from './assets/images/6.jpg'
import img7 from './assets/images/7.jpg'
import img8 from './assets/images/8.jpg'
import img9 from './assets/images/9.jpg'
import img10 from './assets/images/10.jpg'

import face1 from './assets/images/face1.jpg'


import face3 from './assets/images/face3.jpg'

import face4 from './assets/images/face4.jpg'

import face2 from './assets/images/face2.jpg'



const cards = [
  { cardImage: img1, profileImage: face1, title: 'Title 1', description: 'Description 1', userName: 'Amjad 1', date: '1 Aug', subscription: 'Members Only' },
  { cardImage: img2, profileImage: face2, title: 'Title 2', description: 'Description 2', userName: 'Amjad 2', date: '2 Aug', subscription: 'Members Only' },
  { cardImage: img3, profileImage: face3, title: 'Title 3', description: 'Description 3', userName: 'Amjad 3', date: '3 Aug', subscription: 'Members Only' },
  { cardImage: img4, profileImage: face4, title: 'Title 4', description: 'Description 4', userName: 'Amjad 4', date: '4 Aug', subscription: 'Members Only' },
  { cardImage: img5, profileImage: face1, title: 'Title 5', description: 'Description 5', userName: 'Amjad 5', date: '5 Aug', subscription: 'Members Only' },
  { cardImage: img6, profileImage: face2, title: 'Title 6', description: 'Description 6', userName: 'Amjad 6', date: '6 Aug', subscription: 'Members Only' },
  { cardImage: img7, profileImage: face3, title: 'Title 7', description: 'Description 7', userName: 'Amjad 7', date: '7 Aug', subscription: 'Members Only' },
  { cardImage: img8, profileImage: face4, title: 'Title 8', description: 'Description 8', userName: 'Amjad 8', date: '8 Aug', subscription: 'Members Only' },
  { cardImage: img9, profileImage: face2, title: 'Title 9', description: 'Description 9', userName: 'Amjad 9', date: '9 Aug', subscription: 'Members Only' },
  { cardImage: img10, profileImage: face1, title: 'Title 10', description: 'Description 10', userName: 'Amjad 10', date: '10 Aug', subscription: 'Members Only' }
]

function App() {


  return (
    <>

    {cards.map(({cardImage,profileImage,title,description,userName,date,subscription})=>(
    <CardComponent cardImage={cardImage} profileImage={profileImage} title={title} description={description} userName={userName} date={date} subscription={subscription} />
    ))}
  

    </>
  )
}

export default App



