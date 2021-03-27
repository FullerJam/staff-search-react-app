import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`


export default class App extends React.Component {
    render() {
        return (
            <StyledWrapper>
                <Loader
                type="TailSpin"
                color="#83050b"
                height={100}
                width={100}
                timeout={1000} 
            />
            </StyledWrapper>
        );
    }
}