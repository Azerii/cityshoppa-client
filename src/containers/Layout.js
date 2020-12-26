import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Body = styled.div`
    min-height: 50vh;
`


function Layout (props) {

    

    return (
        <>
        <Navbar />
        <Body>
            <Container>
                {props.children}
            </Container>
        </Body>
        <Footer />
        </>
    )
}

export default Layout