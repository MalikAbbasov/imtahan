import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="container">
            <div className="icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            </div>
            <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer