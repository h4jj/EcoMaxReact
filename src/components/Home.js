import classes from './Home.module.css';
import MainCard from './MainCard';
import Body from './Body';
import HomeCard from './HomeCard';
import ShoppingCart from '../images/addToCart.svg'
import logoOne from '../images/Bakery/burgerbun.png'

const Home = props => {

    const firstRow = [
    {text:"Burger Buns", pricing:"2$", amount:"6", productImage:logoOne, cartLogo:ShoppingCart},
    {text:"Burger Buns", pricing:"2$", amount:"6", productImage:logoOne, cartLogo:ShoppingCart},
    {text:"Burger Buns", pricing:"2$", amount:"6", productImage:logoOne, cartLogo:ShoppingCart},
    {text:"Burger Buns", pricing:"2$", amount:"6", productImage:logoOne, cartLogo:ShoppingCart}];


    return (
        <MainCard>
            <Body className={classes.homeBody}>
                <div className={classes.titleContainer}>
                    <div className={classes.titleBox}>
                        <p>20$ OFF</p>
                        <p>YOUR FIRT ORDER 80$ OR MORE</p>
                        <p>PROMO CODE GROCERY15</p>
                    </div>
                    <h1>Hot Deals</h1>
                </div>
                <div className={classes.cardContainer}>
                    {/* {firstRow.map(item => {
                        <HomeCard cartLogo={item.cartLogo} productImage={item.productImage} text={item.text} pricing={item.pricing} amount={item.amount} />
                    })} */}
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    
                </div>
                <div className={classes.titleContainerTwo}>
                    <div className={classes.titleBox}>
                        <p>20$ OFF</p>
                        <p>YOUR FIRT ORDER 80$ OR MORE</p>
                        <p>PROMO CODE GROCERY15</p>
                    </div>
                    <h1>Covid Essentials</h1>
                </div>
                <div className={classes.cardContainerTwo}>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                    <HomeCard cartLogo={ShoppingCart} productImage={logoOne} text="Burger Buns" pricing="$2" amount="6"/>
                </div>
            </Body>
        </MainCard>
    )
};

export default Home;