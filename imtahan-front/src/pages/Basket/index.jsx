import React from 'react'
import BasketPage from '../../components/BasketPage'
import { Helmet } from 'react-helmet'

function Basket() {
  return (
    <div>
        <Helmet><title>Basket</title></Helmet>
        <BasketPage/>
    </div>
  )
}

export default Basket