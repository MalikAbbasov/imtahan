import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext/WishlistContext'
import "./wishlist.scss"

function WishlistPage() {
    const {wishlist,removeWish} = useContext(WishlistContext)
  return (
    <div>
        <div id="wishlist">
        <div className="cards">
                        {
                            wishlist.map(x => (
                                <div className="card" key={x._id}>
                                    <img src={x.image} alt="" />
                                    <h3>{x.name}</h3>
                                    <p>$ {x.price}</p>
                                    <button onClick={()=>removeWish(x)}>Remove wishlist</button>
                                </div>
                            ))
                        }
                    </div>
        </div>
    </div>
  )
}

export default WishlistPage