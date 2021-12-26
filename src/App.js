// Lets design our App

// since, we have our notes protected by authentication
// we need to have a login page
// this would work like this

// 1. check if logged in
// 2. if true, load notes
// 3. else, load login page

// lets make the login and notes components
import Notes from "./Note";
import Login from "./Login";

import Axios from "./axios";

import { useState, useEffect } from "react";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(async () => {

    const axios = await Axios();
    const response = await axios.get('/user/login_status');

    setLoggedIn(response.data);

  }, [])
  // we will pass the setter to login
  return isLoggedIn ? <Notes /> : <Login setLoggedIn={setLoggedIn} />;
}

export default App;