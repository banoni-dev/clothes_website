import React from 'react'
import './cathegory.css'
export default function Cathegory(props) {
    console.log(props.cathegory.id);
  return (
    <div style={{ backgroundImage: `url(${props.cathegory.imgURL})`}} key={props.cathegory.id} className='cathegory'>
        <a href='#'><span>{props.cathegory.name}</span></a>
    </div>
  )
}
