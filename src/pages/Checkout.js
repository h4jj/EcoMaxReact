import classes from './Checkout.module.css';

const Checkout = props => {

    return (
        <div className={classes.checkoutContainer}>
            <div className={classes.itemsContainer}>
                <h1>My Cart</h1>
                <h3>Online Grocery</h3>
                <div>
                    <p>Empty Cart</p>
                </div>
            </div>
            <div className={classes.summaryContainer}>
                <h2>Cart Summary</h2>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>QST</p>
                        <p>GST</p>
                        <p>Delivery Fees</p>
                    </div>
                    <div className={classes.end}>
                        <p>$0.00</p>
                        <p>$0.00</p>
                        <p>$0.00</p>
                        <p>$5.00</p>
                    </div>
                </div>
                <div>
                    <h3>Total</h3>
                    <p style={{textAlign:'end'}}>$5.00</p>
                </div>
                <button>Check Out</button>
            </div>
        </div>
    )
};

export default Checkout;