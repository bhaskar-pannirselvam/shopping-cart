
import React, { useState } from "react";
import { connect } from 'react-redux';
import { addToCart } from "../redux/actions";

const Item = (props, addToCart) => {
    const image = require.context('../images', true);
    const [qty, setQty] = useState(props.qty);
    const itemProp = { ...props };


    const addHandler = () => {
        let newQty = qty + 1;
        itemProp.qty = newQty;
        setQty(newQty);
        props.addToCart(itemProp);
        // console.log(itemProp);
    }

    const removeHandler = () => {
        let newQty = qty - 1;
        if (newQty >= 0) {
            setQty(newQty);
            itemProp.qty = newQty;
        }
    }

    return (
        <div ><li class="grid_4 item">
            <a href="#" class="btn-remove">
                <i class="far fa-trash-alt"></i>
            </a>
            <div class="preview">
                <img src={image(`./${props.image}`)} />
            </div>
            <div class="details" data-price="{props.price}">
                <h3>
                    {props.name}
                </h3>
                <p>Min Qty: {props.minQty}</p>
                <div class="col_1of2 quantity-text">
                    <p>{props.curr} {props.price}</p>
                </div>
            </div>
            <div class="inner_container">

                <div class="col_1of2 align-center picker">
                    <p>
                        <button onClick={addHandler}>
                            +
                        </button>
                    </p><div class="col_1of2 quantity-text">
                        <p><span class="current_quantity">{qty}</span>  </p>
                    </div>
                    <button onClick={removeHandler}>
                        -
                    </button>
                    <p></p>
                    <input type="hidden" class="quantity_field" name="quantity" data-price="{props.price}" value="1" />
                </div>
            </div>


        </li>
        </div>);


    {/* return <div>
        <div>
            <img src={image(`./${props.image}`)} alt='item image' />
        </div>
        <div>
            <h3>{props.name}</h3>
        </div>
    </div> */}
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
    }
}

export default connect(null, mapDispatchToProps)(Item);