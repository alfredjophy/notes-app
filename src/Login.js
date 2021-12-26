// to login, we need the username and password
// and then we send a POST request to drupal


// lets create a form

// lets add a submit button

// we need to bind a login function to onSubmit

import Axios from "./axios";

const Login = (props) => {

    const login = async (e) => {
        // we get the event 
        e.preventDefault(); // this will prevent reloading
        // lets make the object with the values
        const data = {
            "name": e.target.name.value,
            "pass": e.target.pass.value
        }

        // we need to send a POST request
        // we need an await here as well
        const axios = await Axios();
        try {
            // we forgot to make this async 
            await axios.post('/user/login', data);
            alert("Login Successfull");
            // once we have successfully logged in
            // we must change the state in App
            props.setLoggedIn(true);
        }
        catch {
            alert("Login Failed");
        }
        // since it will return an error, lets add a try catch
    }
    return (<div>
        <h1>Login</h1>
        <fieldset>
            <form onSubmit={login}>
                <label>Username : </label>
                <input type="text" name="name" />
                <br />
                <label>Password : </label>
                <input type="password" name="pass" />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </fieldset>
    </div>);
}
export default Login;