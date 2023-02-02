import React from 'react'
import './content.css'
import backgroundImg from '../../images/background_img.png'

export default function content() {
  return (
    <div className="content">
      <img alt={backgroundImg} src={backgroundImg} />
      <div className="text">
        <div className="title">
          <h1>Welcome to our website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, omnis nobis. Earum deleniti esse pariatur nostrum
            reprehenderit nihil rerum dolor, dolorum ut ducimus repellendus
            mollitia odio modi corrupti eaque, quam, dignissimos exercitationem
            veniam accusantium enim voluptas ullam debitis! Quae repellendus
            incidunt culpa quas animi? Repudiandae neque alias aliquid inventore
            hic!
          </p>
        </div>
      </div>
    </div>
  )
}
