import classes from './Header.module.css';
import addToCart from '../images/addToCart.svg'

const Header = props => {

    return (
        <header className={classes.headerContainer}>
            <div className={classes.upperContainer}>
                <h2 className={classes.ecomaxHeader}>EcoMax</h2>
                <div className={classes.upperNavContainer}>
                    <button className={classes.button}>Sign In</button>
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
                        <li> Home </li>
                        <li> Aisles </li>
                        <li> About </li>
                        <li> Support </li>
                    </ul>
                </nav>
                <div className={classes.addToCartContainer}>
                    <p>My Cart</p>
                    <img src={addToCart}></img>
                    <p className={classes.addToCartCounter}>0</p>
                </div>
            </div>
        </header>
    )
};

export default Header;