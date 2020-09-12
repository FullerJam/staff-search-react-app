import React, {useEffect, useState} from 'react';
import Search from 'Components/Search/Search';


class Homepage extends React.Component {
    
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function retrieveRandoms() {
//       const response = await fetch("https://api.randomuser.me");
//       const json = await response.json();
//       const result = data.results[0];
//       setUsers(...users, result);
//       if (users <= 9) {
//         retrieveRandoms();
//       }
//     }
//   }, []);
    render() {
        return (
            <>
                <Search />
            </>
        );
    }
}

// OR 

const HomepageUsingHooks = () => {
    return (
        <>
            <Search />
        </>
    );
};

export default Homepage;

export { 
    Homepage, 
    HomepageUsingHooks
};