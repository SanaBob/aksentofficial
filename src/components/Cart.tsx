import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './styles/MainDiv.scss';

type product = {
    name: string,
    color: string,
    size: string,
    price: number,
}

const Cart = () => {

    const [cartState, setCartState] = useState<product[]>([]);

    const userState = useSelector((state: any) => state.user.value);

    useEffect(() => {
        setCartState(userState.cart);
    }, [])

    return (
        <div className="main-div">
            <div>
                {cartState && cartState.length > 1 ? cartState.map((item, index) => {
                    if (index === 0) { return console.log(item, index) };
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>{item.color}</div>
                            <div>{item.size}</div>
                            <div>{item.price} VND</div>
                        </div>
                    )
                }) : 'No items in cart'}
            </div>
        </div>
    )
}

export default Cart;
