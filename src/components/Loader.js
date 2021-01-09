import React from 'react'
import styled from 'styled-components'
import loader from '../assets/global/loader.gif'


const Img = styled.img`
    height: 2rem;
`

function Loader () {
    return <Img src={loader} alt='' />
}

export default Loader