import React from 'react';
import Search from 'Components/Search/Search';

class Homepage extends React.Component {
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