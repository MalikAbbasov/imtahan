import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage'


export const BasketContext = createContext()
function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket",[])

    function addBasket(item) {
        let elementIndex = basket.findIndex(x => x._id === item._id)
        if (elementIndex === -1) {
            setBasket([...basket, {...item,count:1}])
        }
    }
    
    function removeBasket(item) {
        setBasket(basket.filter((x) => x._id !== item._id))
    }

    function increase(item) {
        let elementIndex = basket.findIndex(x => x._id === item._id)
        basket[elementIndex].count++
        setBasket([...basket])
    }

    function decrease(item) {
        let elementIndex = basket.findIndex(x => x._id === item._id)
        if (basket[elementIndex].count === 1) {
            return
        }
        basket[elementIndex].count--
        setBasket([...basket])
    }

    const data = {basket,addBasket,removeBasket,increase,decrease}
    return (
        <div>
            <BasketContext.Provider value={data}>
                {children}
            </BasketContext.Provider>
        </div>
    )
}

export default BasketProvider