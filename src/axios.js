import axios from "axios";

// lets define some constants
const DrupalURL = "http://localhost/drupal";
const TokenURL = DrupalURL + "/session/token";

// we will create a function here that will return a axios object

export default async () => {
    const csrf = await axios.get(TokenURL, {
        withCredentials: true
    });

    // we havent added the X-CSRF-Token header
    const obj = axios.create({
        baseURL: DrupalURL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf.data
        },
        params: { _format: "json" }

    });
    return obj;
}

// we can import this function anywhere and calling the function
// gives us a axios object

// this will make things easier later on