import classes from './MainCard.module.css';
import Header from './Header'
import Footer from './Footer'

const MainCard = props => {

    return (
        <div className={classes.mainCard}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
};

export default MainCard

