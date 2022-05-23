import classes from './Aisles.module.css';
import PicOne from '../images/FruitsVeggies/fruitsveggies.png';
import PicTwo from '../images/Bakery/bread.png';
import PicThree from '../images/DairyEggs/dariyneggs.png';
import PicFour from '../images/HouseholdCleaning/cleaning.png';
import PicFive from '../images/CovidEssentials/facemask.png'
import FruitsAndVegetables from './FruitsAndVegetables';


import { Link, Route, Routes } from 'react-router-dom';

const Aisles = props => {
    
    return (
        <div className={classes.aislesContainer}>
            <Link to="/aisles/fruitsandvegetables"  className={classes.aislesCard}>
                <img src={PicOne} />
                <h2>Fruits & Vegetables</h2>
            </Link>
            <Link to="/aisles/bakery" className={classes.aislesCard}>
                <img src={PicTwo} />
                <h2>Bakery</h2>
            </Link>
            <Link to="/aisles/dairyandeggs" className={classes.aislesCard}>
                <img src={PicThree} />
                <h2>Dairy & Eggs</h2>
            </Link>
            <Link to="/aisles/householdcleaning" className={classes.aislesCard}>
                <img src={PicFour} />
                <h2>Household Cleaning</h2>
            </Link>
            <Link to="/hygieneandsafety" className={classes.aislesCard}>
                <img src={PicFive} />
                <h2>Hygiene & Safety</h2>
            </Link>
        </div>
    )
};

export default Aisles;