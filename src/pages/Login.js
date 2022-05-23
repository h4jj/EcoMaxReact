import classes from './Login.module.css';

const Login = props => {

    return (
        <div className={classes.loginContainer}>
            <form className={classes.formContainer}>
                <h1>Login</h1>
                <label>Email</label>
                <input />
                <label>Password</label>
                <input />
                <button>Sign In</button>
                <button>Create Account</button>
            </form>
        </div>
    )
};

export default Login;