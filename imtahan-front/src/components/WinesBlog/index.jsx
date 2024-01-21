import React from 'react'
import "./blog.scss"

function WinesBlog() {
  return (
    <div>
      <div id="blog">
        <div className="container">
          <h2>Wine's Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
          <h6>View All Products <i className="fa-solid fa-arrow-right-long"></i></h6>

          <div className="cards">
            <div className="card">
              <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg.webp" alt="" />
              <h2>What You Need To Know About Premium Rosecco</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <h6>Dave Rogers <span>in</span> News</h6>
            </div>
            <div className="card">
              <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg.webp" alt="" />
              <h2>What You Need To Know About Premium Rosecco</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <h6>Dave Rogers <span>in</span> News</h6>
            </div>
            <div className="card">
              <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg.webp" alt="" />
              <h2>What You Need To Know About Premium Rosecco</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
              <h6>Dave Rogers <span>in</span> News</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinesBlog