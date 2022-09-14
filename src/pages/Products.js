import Item from '../component/Item';
import './products.css';
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Products(props) {
    const dummyItems = [{ "id": 1, "imageName": "black.jpeg", "name": "Black", "price": 250, "currency": "INR", "minQuantity": 3 }, { "id": 2, "imageName": "blue.jpeg", "name": "Blue", "price": 350, "currency": "INR", "minQuantity": 3 }, { "id": 3, "imageName": "brown.jpeg", "name": "Brown", "price": 350, "currency": "INR", "minQuantity": 2 }, { "id": 4, "imageName": "green.jpeg", "name": "Green", "price": 500, "currency": "INR", "minQuantity": 2 }, { "id": 5, "imageName": "orange.jpeg", "name": "Orange", "price": 250, "currency": "INR", "minQuantity": 1 }, { "id": 6, "imageName": "yellow.jpeg", "name": "Yellow", "price": 350, "currency": "INR", "minQuantity": 1 }];

    return (

        <div >
            <div className="grid_12 header">
                <div >
                    <h1 data-testid="products-header">Shopping cart Project </h1>
                </div>


                <div >
                    <Link to="/checkout">
                        <img src="https://www.cookfood.net/Content/images/basket2.png" />
                        <h3 data-testid={`cartQty`}>Items: {props.totQty}</h3>
                    </Link>
                </div>
            </div>

            <div className="container">
                {dummyItems.map(it => <Item image={it.imageName}
                    name={it.name}
                    price={it.price}
                    minQty={it.minQuantity}
                    curr={it.currency}
                    qty={0}
                    id={it.id} 
                    key={it.id}
                    />)}
            </div>


        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        totQty: state.shop.totQty,
    };
};

export default connect(mapStateToProps)(Products);