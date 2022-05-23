import classes from './Bakery.module.css'
import HomeCard from '../pages/HomeCard';

const Bakery = props => {
    return (
        <div className={classes.mainContainer}>
            <h1>Bakery</h1>
            <div className={classes.bakeryContainer}>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
        </div>
    )
};

export default Bakery;