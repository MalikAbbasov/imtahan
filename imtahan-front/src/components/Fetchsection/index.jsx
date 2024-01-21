import React, { useContext, useEffect, useState } from 'react'
import "./fetch.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext/WishlistContext'
import { BasketContext } from '../../context/BasketContext/BasketProvider'

function Fetchsection() {
    const [product, setProduct] = useState([])
    const { addWish } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)

    useEffect(() => {
        fetch("http://localhost:3400/")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div id="fetch">
                <div className="container">
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                    <h6>View All Products <i className="fa-solid fa-arrow-right-long"></i></h6>

                    <div className="cards">
                        {
                            product.map(x => (
                                <div className="card" key={x._id}>
                                    <img src={x.image} alt="" />
                                    <div className="hover">
                                        <h3>{x.name}</h3>
                                        <p><span>${x.oldPrice}</span> ${x.price}</p>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <div className="butons">
                                            <Link to={`/detail/${x._id}`}><button>Go detail </button></Link>
                                            <button onClick={()=>addWish(x)}> <i  className="fa-solid fa-heart"></i></button>
                                            <button onClick={()=>addBasket(x)}> <i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                    <h3>{x.name}</h3>
                                    <p>$ {x.price}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetchsection