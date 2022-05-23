import classes from './FruitsAndVegetables.module.css'
import HomeCard from '../pages/HomeCard';

const FruitsAndVegetables = props => {
    return (
        <div className={classes.mainContainer}>
            <h1>Fruits And Vegetables</h1>
            <div className={classes.fruitsAndVeggiesContainer}>
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

export default FruitsAndVegetables;