import React from 'react'
import { Helmet } from 'react-helmet'
import WishlistPage from '../../components/WishlistPage'

function Wishlist() {
  return (
    <div>
        <Helmet> <title>Wishlist</title></Helmet>
        <WishlistPage/>
    </div>
  )
}

export default Wishlist