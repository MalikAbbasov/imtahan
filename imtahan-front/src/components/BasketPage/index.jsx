import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext/BasketProvider'
import "./basket.scss"

function BasketPage() {
    const { basket, removeBasket,increase,decrease } = useContext(BasketContext)

    return (
        <div>
            <div id="basket">
                <div className="cards">
                    {
                        basket.map(x => (
                            <div className="card" key={x._id}>
                                <img src={x.image} alt="" />
                                <h3>{x.name}</h3>
                                <p>$ {x.price}</p>
                                <div className="count">
                                    <button onClick={()=>increase(x)}>+</button>
                                    <h1>{x.count}</h1>
                                    <button onClick={()=>decrease(x)}>-</button>
                                </div>
                                <button onClick={() => removeBasket(x)}>Remove basket</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BasketPage