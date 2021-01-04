import React from 'react'
import styled from 'styled-components'

import arrow_places from '../assets/landing/arrow_places.svg'
import Container from './Container'

const Wrapper = styled.div`
    padding: 7rem 0;
    background-color: #F3F4F4;
`

const Header = styled.div`
    .caption {
        display: flex;
        justify-content: center;
    
        .textWrapper {
            margin-right: 5rem;

            .heading {
                font-size: 200%;
                font-weight: 500;
            }

            .subheading {
                font-size: 120%;
            }
        }
    }
`

const Shops = styled.div`
    display: flex;
    align-items: center;
    
    .item {
        
    }
`

function Suppliers () {


    return (
        <Wrapper>
            <Container>
                <Header>
                    <div className='caption'>
                        <div className='textWrapper'>
                            <p className='heading'>Your Local Shops &amp; Suppliers</p>
                        </div>
                    </div>
                </Header>

            </Container>
        </Wrapper>
    )
}

export default Suppliers