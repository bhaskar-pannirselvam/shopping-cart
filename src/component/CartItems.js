
import React, { useState } from "react";



const CartItem = (props) => {
    const image = require(`../images/${props.image}`);
    const value = props.price * props.qty;
    return (
        <div ><li className="grid_4 item">
            <a href="#" className="btn-remove">
                <i className="far fa-trash-alt"></i>
            </a>
            <div className="preview">
                <img src={image} />
            </div>
            <div className="details" >
                <h3 data-testid={`name${props.id}`}>
                    {props.name}
                </h3>
                <p data-testid={`qty${props.id}`}> Qty: {props.qty}</p>
                <div className="col_1of2 quantity-text">
                    <p data-testid={`price${props.id}`}>{props.curr} {props.price}</p>
                </div>

            </div>
            <div className="inner_container">

                <div className="col_1of2 align-center picker">
                    <p data-testid={`cost${props.id}`}> Cost: {props.curr} {value}</p>


                </div>
            </div>


        </li>
        </div>);


};



export default CartItem;