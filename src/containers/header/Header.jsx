import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text"> Let's build something amazing with GPT-3 Open AI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem quibusdam reiciendis sapiente veritatis. Atque doloremque eius eum expedita fuga itaque, unde voluptatum. Consequatur cumque libero maiores placeat reprehenderit unde.
        </p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder="Send us your mail"/>
          <button>Get started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people"/>
          <p>1,600 people subscribed last hour</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
      </div>
    </div>
  )
}

export default Header
