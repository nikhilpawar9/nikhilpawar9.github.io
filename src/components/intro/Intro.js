import React from 'react'
import './Intro.css'
const Intro = () => {
    return (
      <div className='intro'>
        <div className="cards-list">
          <div className="card 1">
            <div className="card_image">
              {" "}
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
            </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 2">
            <div className="card_image">
              <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
            </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card_image">
              <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
            </div>
            <div className="card_title">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 4">
            <div className="card_image">
              <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Intro
