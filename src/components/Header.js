import classes from './Header.module.css';
import addToCart from '../images/addToCart.svg'
import { Link } from 'react-router-dom';

const Header = props => {

    return (
        <header className={classes.headerContainer}>
            <div className={classes.upperContainer}>
                <Link to="/" className={classes.ecomaxHeader}>EcoMax</Link>
                <div className={classes.upperNavContainer}>
                    <Link to="/login">
                        <button className={classes.button}>Sign In</button>
                    </Link>
                </div>
            </div>
            <div className={classes.lowerContainer}>
                <div className={classes.lowerHeader}>
                    <h1>Online Groccery</h1>
                </div>
                <div className={classes.searchbarContainer}>
                    <input placeholder='Search for product' className={classes.searchbar}></input>
                </div>
                <nav className={classes.mainNav}>
                    <ul>
                        <Link to="/"> Home </Link>
                        <Link to="/aisles"> Aisles </Link>
                        <Link to="/about"> About </Link>
                        <Link to="/support"> Support </Link>
                    </ul>
                </nav>
                <Link to="/checkout" className={classes.addToCartContainer}>
                    <p>My Cart</p>
                    <img src={addToCart}></img>
                    <p className={classes.addToCartCounter}>0</p>
                </Link>
            </div>
        </header>
    )
};

export default Header;