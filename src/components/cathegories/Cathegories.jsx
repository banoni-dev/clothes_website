import React from 'react'
import backgroundImg from '../../images/background_img2.jpg'
import './cathegories.css'
import Cathegory from '../Cathegory/Cathegory';

const cathegories = [
  { id: 1, name: 'Shoes', imgURL: '/images/shoes.png' },
  { id: 2, name: 'Hoodies', imgURL: '/images/hoodies.png' },
  { id: 3, name: 'T-shirts', imgURL: '/images/t-shirt.png' },
  { id: 4, name: 'Jackets', imgURL: '/images/jackets.png' },
  { id: 5, name: 'Jeans', imgURL: '/images/jeans.png' },
  { id: 6, name: 'Shorts', imgURL: '/images/shorts.png' }
]

export default function Cathegories() {
  return (
    <div className="cathegories">
      <img alt={backgroundImg} src={backgroundImg} />
      <div className="cathegories_container">
        <div className="title">
          <h1>All the cathegories</h1>
        </div>
        <div className="all_cathegories">
                {cathegories.map(e=><Cathegory cathegory={e} />)}
          </div>
        </div>
      </div>
  )
}
