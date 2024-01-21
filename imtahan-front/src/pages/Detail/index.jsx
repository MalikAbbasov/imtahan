import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  "./detail.scss"
import { Helmet } from 'react-helmet'

function Detail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3400/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <Helmet><title>Detail</title></Helmet>
            <div id="detail">
                <div className="container">
                    <div className="card" key={product._id}>
                        <img src={product.image} alt="" />
                        <div className="hover">
                            <h3>{product.name}</h3>
                            <p><span>${product.oldPrice}</span> ${product.price}</p>
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="butons">
                                <button> <i className="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                        <h3>{product.name}</h3>
                        <p>$ {product.price}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail