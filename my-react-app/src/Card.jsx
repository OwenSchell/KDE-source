import profilePic  from "./assets/march7th.jpg"

function Card(props) {
    return(
        <div className="login-container">
            <div className="login-form">
                <h2>Sign In</h2>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <p>Forgot your password ?</p>
                <button>Login</button>
                <button>Sign up</button>
                <button>check</button>
            </div>
        </div>
    );
}

export default Card