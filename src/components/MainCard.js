import classes from './MainCard.module.css';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const MainCard = props => {

    return (
        <div className={classes.mainCard}>
            <Header />
            <Body>
                {props.children}
            </Body>
            <Footer />
        </div>
    )
};

export default MainCard

