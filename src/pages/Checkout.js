import CartItem from "../component/CartItems";
import { loadState } from "../redux/localStorage";


function Checkout(props) {
    const serialState = localStorage.getItem('appState');
    const cart = JSON.parse(serialState).cart;
    //console.log(cart);
    const total = cart.reduce((acc, it) => acc + (it.qty * it.price), 0);


    return (
        <div >
            <div className="grid_12 header">
                <div >
                    <h1 data-testid="products-header">Shopping cart Project </h1>
                </div>


                <div >
                    <h3>Receipt</h3>
                </div>
            </div>

            <div className="container">
                {cart.map(it => <CartItem image={it.image}
                    name={it.name}
                    price={it.price}
                    minQty={it.minQuantity}
                    curr={it.currency}
                    qty={it.qty}
                    id={it.id} 
                    key={it.id}/>)}
            </div>
            <div className="grid_12 ">
                <p data-testid={`total`} >Total Amount: INR {total}</p>
            </div>
        </div>
    );
}

export default Checkout;