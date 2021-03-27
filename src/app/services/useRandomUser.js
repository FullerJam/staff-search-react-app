import { useEffect, useState, } from "react";

function useRandomUser() {
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://api.randomuser.me?results=10&nat=us,gb,fr,de"
                );
                const data = await response.json();
                // console.log(data)
                setLoading(false);
                setUsers(data.results);
            } catch (e) {
                setErrors(e);
            }
        })();
    }, []);

    return{
        loading,
        errors,
        users
    }
}

export default useRandomUser;