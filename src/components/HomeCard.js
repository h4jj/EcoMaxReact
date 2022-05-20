import classes from './HomeCard.module.css';

const HomeCard = props => {

    return (
        <div className={classes.homeCardContainer}>
            <img className={classes.productImage} src={props.productImage} />
            <h2>{props.text}</h2>
            <div className={classes.pricingContainer}>
                <p>{props.pricing} / {props.amount}</p>
                <p>Save {props.amount} on this offer</p>
            </div>
            <div className={classes.cartContainer}>
                <img className={classes.cartLogo} src={props.cartLogo}></img>
            </div>
        </div>
    )
};

export default HomeCard;