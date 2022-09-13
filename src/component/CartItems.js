
import React, { useState } from "react";



const CartItem = (props) => {
    const image = require.context('../images', true);
    const value = props.price * props.qty;
    return (
        <div ><li className="grid_4 item">
            <a href="#" className="btn-remove">
                <i className="far fa-trash-alt"></i>
            </a>
            <div className="preview">
                <img src={image(`./${props.image}`)} />
            </div>
            <div className="details" data-price="{props.price}">
                <h3>
                    {props.name}
                </h3>
                <p> Qty: {props.qty}</p>
                <div className="col_1of2 quantity-text">
                    <p>{props.curr} {props.price}</p>
                </div>

            </div>
            <div className="inner_container">

                <div className="col_1of2 align-center picker">
                    <p> Cost: {props.curr} {value}</p>


                </div>
            </div>


        </li>
        </div>);


};



export default CartItem;