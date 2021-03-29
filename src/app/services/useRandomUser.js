import { useEffect, useState, } from "react";

function useRandomUser() {
    //useState hooks to store data
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://api.randomuser.me?results=10" // limit results to 10 random users
                );
                const data = await response.json(); // call api and await response
                setLoading(false); // Loader set to false
                setUsers(data.results); // populate users const with array of objects
            } catch (e) {
                setErrors(e);
            }
        })();
    }, []); // pass empty array as second argument to function, never reruns after dom has loaded

    return{
        loading,
        errors,
        users
    } //return all values needeed for context providers.
}

export default useRandomUser;