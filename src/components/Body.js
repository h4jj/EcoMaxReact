import classes from './Body.module.css';

const Body = props => {

    return (
        <div className={`${classes.body} ${props.className}`}>{props.children}</div>
    )
};

export default Body;