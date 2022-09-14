
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToCart, removeFromCart, adjustQty } from "../redux/actions";
import { saveState } from "../redux/localStorage";
import store from "../redux/store";

store.subscribe(() => {
    saveState({
        cart: store.getState().shop.cart,
    });
});


const Item = (props, addToCart, removeFromCart, adjustQty) => {
    const image = require(`../images/${props.image}`);
   // const image = '../images/'+props.image;
    const [qty, setQty] = useState(props.qty);
    const [warning, setWarning] = useState(props.warning);
    const itemProp = { ...props };


    const addHandler = () => {
        let newQty = qty + 1;
        itemProp.qty = newQty;
        setWarning("");
        setQty(newQty);
        if (newQty === itemProp.minQty) {
            props.addToCart(itemProp);
        } else if (newQty >= itemProp.minQty) {
            props.adjustQty(itemProp);
        } else {
            setWarning("Can't add items with quantity less than minimum quantity");
        }
        // console.log(itemProp);
    }

    const removeHandler = () => {
        let newQty = qty - 1;
        if (newQty >= itemProp.minQty) {
            setQty(newQty);
            itemProp.qty = newQty;
            props.adjustQty(itemProp);
        } else {
            setQty(0);
            itemProp.qty = newQty;
            props.removeFromCart(itemProp);
        }
    }

    return (
        <div data-testid={`pid${props.id}`} ><li className="grid_4 item">
            <a href="#" className="btn-remove">
                <i className="far fa-trash-alt"></i>
            </a>
            <div className="preview">
                <img src={image} />
            </div>
            <div className="details" data-price="{props.price}">
                <h3 data-testid={`name${props.id}`}>
                    {props.name}
                </h3>
                <p data-testid={`min${props.id}`}>Min Qty: {props.minQty}</p>
                <div className="col_1of2 quantity-text">
                    <p data-testid={`value${props.id}`}>{props.curr} {props.price}</p>
                </div>
                <div>
                    <p data-testid={`msg${props.id}`}>{warning}</p>
                </div>
            </div>
            <div className="inner_container">

                <div className="col_1of2 align-center picker">
                    <p>
                        <button data-testid={`add${props.id}`} onClick={addHandler}>
                            +
                        </button>
                    </p><div className="col_1of2 quantity-text">
                        <p><span data-testid={`qty${props.id}`}className="current_quantity">{qty}</span>  </p>
                    </div>
                    <button data-testid={`rem${props.id}`} onClick={removeHandler}>
                        -
                    </button>
                    <p></p>
                    <input type="hidden" className="quantity_field" name="quantity" data-price="{props.price}" value="1" />
                </div>
            </div>


        </li>
        </div>);


};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item)),
        adjustQty: (item) => dispatch(adjustQty(item))
    }
}

export default connect(null, mapDispatchToProps)(Item);