import classes from './Footer.module.css';

const Footer = props => {

    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerSectionOne}>
                <h2>DELIVERY</h2>
                <p>Monday-Friday 8:00 - 23:00</p>
                <p>Sat-Sun 8:00 - 20:00</p>
            </div>
            <div className={classes.footerSectionTwo}>
                <h2>OFFERS</h2>
                <p>Weekly Sale</p>
                <p>Recipes and Occasions</p>
                <p>Coupons</p>
            </div>
            <div className={classes.footerSectionThree}>
                <h2>SOCIAL MEDIA</h2>
                <p>Call Us</p>
                <p>Instagram</p>
                <p>Email Us</p>
            </div>
        </footer>
    )
}

export default Footer;