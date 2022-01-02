import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from './../reducers/user';
import { Button } from 'react-bootstrap';
import './styles/MainDiv.scss';
import './styles/Cart.scss';

type product = {
    name: string,
    color: string,
    size: string,
    price: number,
}

const Cart = () => {

    const [cartState, setCartState] = useState<product[]>([]);

    const userState = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartState(userState.cart);
    }, [userState]);

    const handleRemove = (index: number) => {
        dispatch(removeCart({ idx: index }));
    }

    return (
        // <div className="main-div">
            <div className="container">
                {cartState && cartState.length > 1 ? cartState.map((item, index) => {
                    if (index === 0) return;
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>Color: {item.color}</div>
                            <div>Size: {item.size}</div>
                            <div>Price: {item.price} VND</div>
                            <Button variant="outline-success" onClick={() => { handleRemove(index) }}>Remove Item</Button>
                        </div>
                    )
                }) : 'No items in cart'}
                {cartState && cartState.length > 1 ? <div>Total: {cartState.reduce((total, item) => total + (item.price || 0), 0)} VND</div> : ''}
            </div>
        // </div>
    )
}

export default Cart;
